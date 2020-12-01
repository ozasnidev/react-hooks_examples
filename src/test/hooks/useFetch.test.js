import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('useFetch hook test', () => {
    test('return a state by default', () => {
        const { result } = renderHook( () => useFetch('https://pokeapi.co/api/v2/pokemon/ho-oh'));
        const { data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });
    test('return a Pokemon as data and sucessfull request', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://pokeapi.co/api/v2/pokemon/ho-oh'));
        await waitForNextUpdate();
        const { data, loading, error } = result.current;

        expect(data.name).toBe('ho-oh');
        expect(loading).toBeFalsy();
        expect(error).toBe(null);
    })
    
});