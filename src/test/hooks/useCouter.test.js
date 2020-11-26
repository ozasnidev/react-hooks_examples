import { renderHook } from '@testing-library/react-hooks';
import { useCouter } from '../../hooks/useCouter';

describe('useConter hook test', () => {
    test('return initial values', () => {
        const { result } = renderHook(() => useCouter());
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    }); 
});