"use client";
import React from 'react';

interface IGlowingCardProps {
  className?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function GlowingCardWithBackground({ 
  className = "", 
  backgroundImage="",
  children,
  title,
  subtitle
}: IGlowingCardProps) {
  return (
    <div className={className}>
      <div className="card">
        {/* Background overlay để tăng độ tương phản */}
        {backgroundImage && <div className="background-overlay" />}
        
        {/* Content */}
        <div className="card-content">
          {children || (
            <>
              {title && <h2 className="card-title">{title}</h2>}
              {subtitle && <p className="card-subtitle">{subtitle}</p>}
              {!title && !subtitle && !children}
            </>
          )}
        </div>
        
        {/* Glowing border effect */}
        <div className="glow" />
      </div>

      <style jsx>{`
        @property --a {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes a {
          to {
            --a: 1turn;
          }
        }

        .card {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: auto;
          aspect-ratio: 1.8;
          border-radius: 0.5em;

          display: grid;
          place-self: center;
          place-content: center;
          color: #ededed;
          font: clamp(1em, 2vw + 2vh, 2em) sans-serif;
          text-align: center;
          text-transform: uppercase;
          text-wrap: balance;
          
          ${backgroundImage ? `
            background-image: url('${backgroundImage}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          ` : ''}
        }

        .background-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.3) 100%
          );
          z-index: 1;
        }

        .card-content {
          position: relative;
          z-index: 2;
          ${backgroundImage ? `
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
            color: white;
          ` : ''}
        }

        .card-title {
          font-size: clamp(1.2em, 2.5vw + 1vh, 1.8em);
          font-weight: bold;
          margin: 0 0 0.5em 0;
          letter-spacing: 1px;
        }

        .card-subtitle {
          font-size: clamp(0.8em, 1.5vw + 0.5vh, 1em);
          margin: 0;
          opacity: 0.9;
          font-weight: 300;
          text-transform: none;
        }

        .glow {
          content: "";
          position: absolute;
          z-index: -1;
          inset: -1em;
          border: solid 1.25em;
          border-image: conic-gradient(
              from var(--a),
              #669900,
              #99cc33,
              #ccee66,
              #006699,
              #3399cc,
              #990066,
              #cc3399,
              #ff6600,
              #ff9900,
              #ffcc00,
              #669900
            )
            1;
          filter: blur(0.75em);
          animation: a 4s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}