'use client';

import { setThemeMode } from '..';
import { useThemeMode, type ThemeMode } from '../../helpers/use-theme-mode';

interface Props {
  mode?: ThemeMode;
}

export function ThemeModeInit({ mode }: Props) {
  if (mode) setThemeMode(mode);

  useThemeMode();

  return null;
}