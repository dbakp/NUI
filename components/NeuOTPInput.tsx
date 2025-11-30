import React, { useState, useRef, useEffect } from 'react';
import { OTPInputProps } from '../types';

export const NeuOTPInput: React.FC<OTPInputProps> = ({ 
    length = 6, 
    onChange, 
    className = '' 
}) => {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
        onChange(newOtp.join(''));

        // Focus next input
        if (element.value !== '' && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            if (otp[index] === '' && index > 0) {
                inputRefs.current[index - 1]?.focus();
                const newOtp = [...otp];
                newOtp[index - 1] = '';
                setOtp(newOtp);
                onChange(newOtp.join(''));
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
                onChange(newOtp.join(''));
            }
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain').slice(0, length);
        if (/^\d+$/.test(pastedData)) {
            const newOtp = [...otp];
            pastedData.split('').forEach((char, i) => {
                if (i < length) newOtp[i] = char;
            });
            setOtp(newOtp);
            onChange(newOtp.join(''));
            inputRefs.current[Math.min(pastedData.length, length - 1)]?.focus();
        }
    };

    return (
        <div className={`flex gap-3 justify-center ${className}`}>
            {otp.map((data, index) => (
                <div key={index} className="relative group w-12 h-14">
                    {/* Inner Shadow Container */}
                    <div className="absolute inset-0 rounded-xl pointer-events-none shadow-neu-pressed bg-neu-base" />
                    
                    <input
                        ref={el => { inputRefs.current[index] = el }}
                        type="text"
                        maxLength={1}
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onKeyDown={e => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        className="
                            w-full h-full text-center text-xl font-bold bg-transparent 
                            border-none outline-none text-gray-700
                            focus:ring-0
                        "
                    />
                    
                    {/* Focus Glow */}
                    <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[0_0_0_2px_rgba(108,99,255,0)] group-focus-within:shadow-[0_0_0_1px_rgba(108,99,255,0.5)] transition-shadow duration-300" />
                </div>
            ))}
        </div>
    );
};