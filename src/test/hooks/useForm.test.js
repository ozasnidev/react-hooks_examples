import { useForm } from '../../hooks/useForm';
import  { act, renderHook } from '@testing-library/react-hooks';



describe('useForm hook test', () => {
    const initialUser = { name: 'John Doe', email: 'john@doe.com'};
    test('return a form by default', () => {
        const { result } = renderHook(() => useForm(initialUser));
        const [ values, handleInputChange, reset ] = result.current;
        expect(values).toEqual(initialUser);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });
    test('change a form value', () => {
        const { result } = renderHook(() => useForm(initialUser));
        const [ , handleInputChange ] = result.current;
        act(() => { handleInputChange({target: {name: 'name', value: 'Alexia'}}); });
        const [ formValues ] = result.current;
        expect(formValues).toEqual({...initialUser, name:'Alexia'});
    });
    test('reset the form', () => {
        const { result } = renderHook(() => useForm(initialUser));
        const [ , handleInputChange,reset ] = result.current;
        act(() => { handleInputChange({target: {name: 'name', value: 'Alexia'}}); reset() });
        const [ formValues ] = result.current;
        expect(formValues).toEqual(initialUser);
    });
});
