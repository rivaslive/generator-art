import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useModal from '@/hooks/useModal';

describe('useModal hook', () => {
  let hook: any;
  beforeEach(() => {
    const { result } = renderHook(() => useModal());
    hook = result;
  });

  it('Open Modal', () => {
    expect(hook.current.isOpen).toBe(false);

    act(() => {
      hook.current.openModal();
    });

    expect(hook.current.isOpen).toBe(true);
  });

  it('Close Modal', () => {
    act(() => {
      hook.current.closeModal();
    });

    expect(hook.current.isOpen).toBe(false);
  });

  it('Toggle Modal', () => {
    act(() => {
      hook.current.toggleModal();
    });

    expect(hook.current.isOpen).toBe(true);
  });
});
