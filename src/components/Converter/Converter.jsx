import React from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import {useMediaQuery, useTheme}from '@mui/material';
import exchange from "./exchange.svg";
import { useDispatch, useSelector } from "react-redux";
import {
    convertToUsd,
    convertToEuro,
    setEuro,
    setUsd,
} from "../../features/converter/converterSlice";
const ConverterRoot = styled("div")({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    height: "20vh",
    width: "60vw",
    margin: "0 auto",
});
const Wrapper = styled("div")(({isMobile}) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",
    width: "100%",
    height: "50%",
}));
const FieldWrapper = styled("div")({
    width: "40%",
    height: "100%",
});
const Label = styled("h1")({
    minHeight: "20px",
    margin: "0",
    padding: "0",
});
const Converter = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const EuroHandleChange = ({ target }) => {
        const value = parseFloat(target.value) || 0;
        dispatch(setEuro(value));
        dispatch(convertToUsd(value));
    };
    const UsdHandleChange = ({ target }) => {
        const value = parseFloat(target.value) || 0;
        dispatch(setUsd(value));
        dispatch(convertToEuro(value));
    };
    const euro = useSelector((state) => state.converter.EURO);
    const usd = useSelector((state) => state.converter.USD);
    return (
        <ConverterRoot>
            <Label>Converter</Label>
            <Wrapper isMobile={isMobile}>
                <FieldWrapper>
                    <TextField
                        value={usd}
                        type="number"
                        label="USD"
                        variant="filled"
                        onChange={UsdHandleChange}
                    />
                </FieldWrapper>
                <img
                    src={exchange}
                    alt="excange"
                    style={{ width: "20%", height: "60%", transform: isMobile ? "rotate(90deg)" : ""}}
                />
                <FieldWrapper>
                    <TextField
                        onChange={EuroHandleChange}
                        value={euro}
                        type="number"
                        label="EURO"
                        variant="filled"
                    />
                </FieldWrapper>
            </Wrapper>
        </ConverterRoot>
    );
};

export default Converter;
