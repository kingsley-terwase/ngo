import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { breakPoints } from "../Constants/dimensions";
import { appColors, inputPalette, menuPalette } from "../Configurations/colors";
import { FONT_FAMILY } from "../Config/font";

const getAppMode = (mode) => {
  const baseInputStyle = {
    fontSize: "13px",
    borderRadius: "6px",
    boxSizing: "border-box",
    height: "43px",
    fontFamily: FONT_FAMILY.secondary,
  };

  const focusBorderColor = "#236BFE";
  const errorBorderColor = "#EA3829";

  return {
    breakpoints: {
      values: { ...breakPoints },
    },
    typography: {
      fontFamily: FONT_FAMILY.primary,
      allVariants: {
        fontFamily: FONT_FAMILY.primary, // ✅ ensures all <Typography> variants use primary
      },
      color: appColors[mode].fg,
    },
    palette: {
      mode,
      background: {
        default: appColors[mode].bg,
      },
      text: {
        primary: appColors[mode].fg,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: appColors[mode].bg,
            color: appColors[mode].fg,
            fontFamily: FONT_FAMILY.primary, // ✅ enforce on <body>
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: FONT_FAMILY.primary, // ✅ enforce on every Typography
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            boxSizing: "border-box",
            padding: "0px 8px",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: appColors[mode].actionBg,
            color: menuPalette[mode].fg,
            fontSize: "13px",
            borderRadius: "4px",
            padding: "8px",
            marginBottom: "4px",
            fontFamily: FONT_FAMILY.primary, // ✅ menu items also
            "&:last-child": { marginBottom: 0 },
            "&:hover": {
              backgroundColor: appColors[mode].divider,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: baseInputStyle,
          icon: {
            color: inputPalette[mode].fg,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            ...baseInputStyle,
            color: inputPalette[mode].fg,
            "& fieldset": {
              borderColor: inputPalette[mode].border,
            },
          },
          input: {
            background: "transparent",
            margin: 0,
            padding: 0,
            fontFamily: FONT_FAMILY.primary, // ✅ enforce inputs too
          },
        },
      },
      MuiFilledInput: {
        defaultProps: { disableUnderline: true },
        styleOverrides: {
          root: {
            ...baseInputStyle,
            color: inputPalette[mode].fg,
            backgroundColor: inputPalette[mode].bg,
            padding: "0px 8px",
            border: `1px solid ${inputPalette[mode].border}`,
          },
          input: {
            background: "transparent",
            margin: 0,
            padding: 0,
            fontFamily: FONT_FAMILY.primary, // ✅ enforce inputs
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          root: {
            "& .MuiMenu-paper": {
              backgroundColor: menuPalette[mode].bg,
              border: `1px solid ${menuPalette[mode].border}`,
              color: appColors[mode].fg,
              borderRadius: "4px",
              padding: "8px",
              boxShadow: "none",
              fontFamily: FONT_FAMILY.primary, // ✅ menu paper
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid #E5E5E5",
            fontFamily: FONT_FAMILY.primary, // ✅ enforce table cells
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 9,
            textTransform: "none",
            fontWeight: 500,
            fontFamily: FONT_FAMILY.primary,
            padding: "8px 24px",
            fontSize: "14px",
            lineHeight: 1.5,
            boxShadow: "none",
          },
          containedPrimary: {
            backgroundColor: appColors[mode]["button"],
            color: "#ffffff",
            "&:hover": {
              backgroundColor: appColors[mode]["btnHover"],
              boxShadow: "none",
            },
          },
        },
        defaultProps: {
          disableElevation: true,
          variant: "contained",
          color: "primary",
        },
      },
    },
  };
};

const getTheme = (mode) => responsiveFontSizes(createTheme(getAppMode(mode)));

export default getTheme;
