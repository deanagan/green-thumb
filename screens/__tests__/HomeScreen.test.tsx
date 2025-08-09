

// Import Jest globals for TypeScript
import '@jest/globals';

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import { jest, describe, afterEach, it, expect } from '@jest/globals';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('HomeScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders welcome title', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Welcome to Green Thumb!')).toBeTruthy();
  });

  it('renders all cards', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Plant Overview')).toBeTruthy();
    expect(getByText('Upcoming Notifications')).toBeTruthy();
    expect(getByText('Random Plant Fact')).toBeTruthy();
  });

  it('navigates to PlantOverview on card press', () => {
    const navigate = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({ navigate });
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Plant Overview'));
    expect(navigate).toHaveBeenCalledWith('PlantOverview');
  });

  it('navigates to Notifications on card press', () => {
    const navigate = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({ navigate });
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Upcoming Notifications'));
    expect(navigate).toHaveBeenCalledWith('Notifications');
  });

  it('navigates to PlantFact on card press', () => {
    const navigate = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({ navigate });
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Random Plant Fact'));
    expect(navigate).toHaveBeenCalledWith('PlantFact');
  });
});
