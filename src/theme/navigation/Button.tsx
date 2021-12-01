import React, { forwardRef } from 'react'
import { ForwardRefRenderFunction, ComponentProps } from 'react'
import { StyleSheet, TextInput as RNButton } from 'react-native'
import { useTheme } from '@react-navigation/native'
export type ButtonProps = ComponentProps<typeof RNButton>

const _Button: ForwardRefRenderFunction<RNButton, ButtonProps> = (
    {style, ...props}, ref) => {
        const { colors } = useTheme()

    return (
        <RNButton ref={ref}
            style={[{color: colors.text, borderColor: colors.text},
                styles.textInput, style]}
            placeholderTextColor={colors.text} {...props}

        />
    )
}

export const Button = forwardRef(_Button)
const styles = StyleSheet.create({
    textInput: {
            borderWidth: 1,
            borderRadius: 5
    }
})
// interface Props {
//     border: string;
//     color: string;
//     children?: React.ReactNode;
//     height: string;
//     onClick: () => void;
//     radius: string
//     width: string;
// }

// const Button: React.FC<Props> = ({
//     border,
//     color,
//     children,
//     height,
//     onClick,
//     radius,
//     width
// }) => {
//     return (
//         <Button
//             onClick={onClick}
//             style={{
//                 backgroundColor: color,
//                 border,
//                 borderRadius: radius,
//                 height,
//                 width
//             }}
//         >
//         {children}
//         </Button>
//     );
// }

// export default Button;

