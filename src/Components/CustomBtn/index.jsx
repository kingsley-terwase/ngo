import React, { useState } from 'react';
import { COLORS } from '../../Config/color';
import { FONT_FAMILY } from '../../Config/font';
import { ArrowRight16Filled } from '@fluentui/react-icons';

export const CustomButton = ({label}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // width: '100%',
        backgroundColor: COLORS.primary,
        color: '#fff',
        borderRadius: '20px',
        textTransform: 'capitalize',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '6px',
        paddingBottom: '6px',
        fontWeight: 600,
        fontSize: '14px',
        border: 'none',
        cursor: 'pointer',
        gap: '4px',
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        
        fontFamily: FONT_FAMILY.primary,
        
        boxShadow: isHovered 
          ? '0px 4px 10px rgba(0,0,0,0.2)' 
          : '0px 2px 4px rgba(0,0,0,0.1)',
        
        transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
        
        outline: 'none',
        userSelect: 'none',
        
        ':active': {
          transform: 'translateY(0)',
        }
      }}
      onClick={() => {
        console.log('View Details clicked');
      }}
    >
      <span style={{ 
        display: 'flex', 
        alignItems: 'center',
        lineHeight: 1
      }}>
       {label}
      </span>
      <ArrowRight16Filled 
        size={20} 
        style={{ 
          marginLeft: '4px',
          transition: 'transform 0.2s ease',
          transform: isHovered ? 'translateX(2px)' : 'translateX(0)'
        }} 
      />
    </button>
  );
};