import type { FC, ReactNode } from 'react';
import { Theme } from '@mui/material';
import type { SxProps } from '@mui/system';
export type SeverityPillColor = 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success';
export type SeverityPillSize = 'extraSmall' | 'small' | 'medium' | 'mediumSemi' | 'mediumNarrow' | 'mediumNarrowLong' | 'mediumNarrowLonger' | 'mediumLarge' | 'large';
export type SeverityPillType = true | false;
interface SeverityPillProps {
    children?: ReactNode;
    color?: SeverityPillColor;
    style?: {};
    sx?: SxProps<Theme>;
    size?: SeverityPillSize;
    isTag?: SeverityPillType;
    icon?: JSX.Element;
    left?: boolean;
    margin?: number;
}
export declare const SeverityPill: FC<SeverityPillProps>;
export {};
