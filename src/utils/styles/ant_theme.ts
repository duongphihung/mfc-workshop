import { ThemeConfig } from 'antd'

export const themes: ThemeConfig = {
  // algorithm: theme.darkAlgorithm,
  components: {
    Layout: {
      // headerBg: 'rgb(79, 89, 102,  0.28)',
      headerBg: '#fff',
      headerPadding: '0 16px',
      // bodyBg: 'rgb(186,231,255)',
      // lightSiderBg: 'rgb(79, 89, 102,  0.28)',
    },
    Upload: {
      controlHeightLG: 80,
    },
    Radio: {
      dotSize: 8,
      buttonPaddingInline: 20,
    },
    Menu: {
      itemSelectedBg: '#1890FF',
      itemSelectedColor: '#fff',
      itemActiveBg: '#FFF',
      colorBgTextActive: '#FFF',
    },
    Table: {
      // headerBorderRadius: 4,
      borderRadiusOuter: 4,
      headerBg: '#1ec28b',
      headerColor: '#fff',
      borderColor: '#f0f0f0',
      borderRadius: 4,
      borderRadiusLG: 4,
      borderRadiusSM: 4,
      borderRadiusXS: 4,
      cellPaddingBlockMD: 8,
      cellPaddingInlineMD: 8,
      cellPaddingBlock: 8,
      cellPaddingBlockSM: 4,
      cellPaddingInline: 8,
      cellPaddingInlineSM: 4,
      selectionColumnWidth: 16,
      lineHeight: 1.3,
      margin: 12,
      padding: 12,
      marginXXS: 2,
      paddingXS: 4,
      paddingXXS: 2,
    },
    Input: {
      lineHeight: 1.3,
      lineHeightLG: 1.52,
    },
    Pagination: {
      itemSize: 28,
      itemSizeSM: 20,
      controlHeight: 28,
      controlHeightLG: 32,
      controlHeightSM: 20,
      paddingXXS: 2,
      marginXXS: 2,
      marginXS: 4,
      margin: 12,
      marginSM: 8,
      lineHeight: 1.3,
      fontSize: 12,
      fontSizeSM: 10,
    },
    List: {
      itemPadding: '0',
      metaMarginBottom: 0,
      titleMarginBottom: 0,
      margin: 8,
      colorSplit: 'none',
    },
    Form: {
      itemMarginBottom: 8,
      controlHeightLG: 36,
    },
    Steps: {
      colorPrimary: '#1ec28b',
    },
    Button: {
      colorPrimary: '#1ec28b',
      colorPrimaryHover: '#17a76f',
    }
  },
}
