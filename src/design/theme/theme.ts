import type { MantineThemeOverride } from '@mantine/core';

import { toMantineColors } from './themeUtils';

export const colors = {
  required: '#F03E3E',
  fgDefault: '#212529',
  fgMuted: '#495057',
  fgSubtle: '#ADB5BD',
  fgOnAccent: '#FFFFFF',
  fgOnDisabled: '#ADB5BD',
  fgDisabled: '#E9ECEF',
  bgSurface: '#FFFFFF',
  bgMuted: '#DEE2E6',
  bgSubtle: '#F1F3F5',
  bgCanvas: '#FAFAFA',
  bgDisabled: '#F1F3F5',
  borderDefault: '#CED4DA',
  borderActive: '#339AF0',
  ctaDefault: '#339AF0',
  ctaEmphasized: '#228BE6',
  ctaMuted: '#4DABF7',
  ctaSubtle: '#D0EBFF',
  ctaDisabled: '#CED4DA',
  primaryDefault: '#4C6EF5',
  primaryEmphasized: '#364FC7',
  primaryMuted: '#748FFC',
  primarySubtle: '#EDF2FF',
  secondaryDefault: '#868E96',
  secondaryEmphasized: '#495057',
  secondaryMuted: '#ADB5BD',
  secondarySubtle: '#F8F9FA',
  dangerDefault: '#FA5252',
  dangerEmphasized: '#E03131',
  helpDefault: '#9775FA',
  helpEmphasized: '#845EF7',
  helpMuted: '#B197FC',
  helpSubtle: '#E5DBFF',
  successDefault: '#37B24D',
  successEmphasized: '#2B8A3E',
  successMuted: '#40C057',
  successSubtle: '#EBFBEE',
  infoDefault: '#4DABF7',
  infoEmphasized: '#339AF0',
  infoMuted: '#74C0FC',
  infoSubtle: '#D0EBFF',
  infoOnInfo: '#FFFFFF',
  errorDefault: '#F03E3E',
  errorEmphasized: '#C92A2A',
  errorMuted: '#FA5252',
  errorSubtle: '#FFE3E3',
  warningDefault: '#F59F00',
  warningEmphasized: '#E67700',
  warningMuted: '#FAB005',
  warningSubtle: '#FFF9DB',
  inputsLabel: '#212529',
  inputsDetail: '#868E96',
  inputsPlaceholder: '#ADB5BD',
  inputsText: '#212529',
  inputsBigBgDisabled: '#F8F9FA',
  inputsBigTextOnDisabled: '#CED4DA',
  inputsBigIconDefault: '#495057',
  inputsBigIconMuted: '#868E96',
  inputsBigHover: '#F8F9FA',
  inputsBigTextActive: '#1864AB',
  inputsBigBgActive: '#E7F5FF',
  inputsBigBgActive2: '#228BE6',
  inputsSmallBgDefault: '#E9ECEF',
  inputsSmallBgMuted: '#E9ECEF',
  inputsSmallIconDefault: '#FFFFFF',
  inputsSmallIconMuted: '#ADB5BD',
  inputsSmallIconSubtle: '#F8F9FA',
  dataDisplayBgDefault: '#CED4DA',
  actionsBgDisabled: '#E9ECEF',
  actionsTextOnDisabled: '#ADB5BD',
  actionsPrimaryBgFilledHover: '#4263EB',
  actionsPrimaryBgOutlineHover: '#EDF2FF',
  actionsPrimaryBgQuietHover: '#EDF2FF',
  actionsPrimaryBgDestructiveHover: '#F03E3E',
  actionsSecondaryBgFilledHover: '#495057',
  actionsSecondaryBgQuietHover: '#F8F9FA',
  actionsSecondaryBgOutlineHover: '#F8F9FA',
};

export const theme: MantineThemeOverride = {
  dir: 'rtl',
  fontFamily: 'IRANSansFaNum',
  colors: toMantineColors(colors),
  primaryColor: 'primaryDefault',
  spacing: {
    xxxs: 8,
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  } as any,
  components: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    TextInput: {
      styles: {
        root: {
          minHeight: '82px',
        },
      },
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Modal: {
      styles: {
        modal: {
          padding: '30px !important',
        },
        header: {
          marginBottom: '40px',
        },
      },
    },
  },
  headings: {
    fontFamily: 'IRANSansFaNum',
  },
};
