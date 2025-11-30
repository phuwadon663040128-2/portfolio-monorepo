import React from 'react';
import { render } from '@testing-library/react';
import Page from '../src/app/page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),    // จำลองฟังก์ชัน router.push
      replace: jest.fn(), // จำลองฟังก์ชัน router.replace
      prefetch: jest.fn(),
      // ใส่ฟังก์ชันอื่นๆ ที่คุณเรียกใช้จาก router
    };
  },
  usePathname() {
    return '';
  },
}));

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});
