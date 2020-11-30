import { renderHook, act } from '@testing-library/react-hooks';
import { useCouter } from '../../hooks/useCouter';

describe('useCouter hook test', () => {
    test('return initial values', () => {
        const { result } = renderHook(() => useCouter());
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    }); 
    test('increment counter', () => {
        const { result } = renderHook(() => useCouter());
        const { increment } = result.current;
        act( () => increment());
        const { counter } = result.current; 
        expect( counter ).toBe(11);
    });
    test('decrement & reset counter', () => {
        const { result } = renderHook(() => useCouter());
        const { decrement, reset } = result.current;
        act( () => {decrement(); reset()});
        const { counter } = result.current; 
        expect( counter ).toBe(10);
    });
});