import styles from './Input.module.scss';
import {useCallback} from "react";

export const Input = (props) => {
    const { onChange, value, ...other } = props;

    const onChangeInput = useCallback((event) => {
        onChange(event.target.value);
    }, [onChange])

    return (
        <input
            type={'text'}
            value={value}
            onChange={onChangeInput}
            className={styles.Input}
            {...other}
        />
    )
}