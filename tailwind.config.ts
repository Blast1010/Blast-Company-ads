import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-block': 'var(--gradient-block)',
				'gradient-clients': 'var(--gradient-clients)',
				'gradient-cta': 'var(--gradient-cta)'
			},
			backgroundColor: {
				'block-hero': 'hsl(var(--block-hero))',
				'block-clients': 'hsl(var(--block-clients))',
				'block-trust': 'hsl(var(--block-trust))',
				'block-services': 'hsl(var(--block-services))',
				'block-analytics': 'hsl(var(--block-analytics))',
				'block-cta': 'hsl(var(--block-cta))'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'block': 'var(--shadow-block)',
				'blue': 'var(--shadow-blue)',
				'subtle': 'var(--shadow-subtle)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(2deg)'
					}
				},
				'breathe': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '0.7'
					},
					'50%': {
						transform: 'scale(1.1)',
						opacity: '1'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.4)'
					}
				},
				'fadeInUp': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0px)'
					}
				},
				'scaleX': {
					'0%': { transform: 'scaleX(0)' },
					'100%': { transform: 'scaleX(1)' }
				},
				'slideInLeft': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slideInRight': {
					'0%': {
						opacity: '0',
						transform: 'translateX(100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slideOutLeft': {
					'0%': {
						opacity: '1',
						transform: 'translateX(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(-100px)'
					}
				},
				'slideOutRight': {
					'0%': {
						opacity: '1',
						transform: 'translateX(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(100px)'
					}
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink': {
					'50%': { 'border-color': 'transparent' }
				},
				'morphing': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						borderRadius: '0.75rem'
					},
					'25%': { 
						transform: 'scale(1.05) rotate(1deg)',
						borderRadius: '1rem'
					},
					'50%': { 
						transform: 'scale(1.02) rotate(-1deg)',
						borderRadius: '0.5rem'
					},
					'75%': { 
						transform: 'scale(1.08) rotate(0.5deg)',
						borderRadius: '1.25rem'
					}
				},
				'cinematic-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px) scale(0.9)',
						filter: 'blur(10px)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'translateY(20px) scale(0.95)',
						filter: 'blur(5px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0px)'
					}
				},
				'cinematic-breathe': {
					'0%, 100%': {
						opacity: '0.4',
						transform: 'scale(1) translateY(0px)',
						filter: 'blur(15px)'
					},
					'50%': {
						opacity: '0.9',
						transform: 'scale(1.08) translateY(-15px)',
						filter: 'blur(8px)'
					}
				},
				'ambient-emerge': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(150px)',
						filter: 'blur(30px)'
					},
					'30%': {
						opacity: '0.3',
						transform: 'scale(1) translateY(100px)',
						filter: 'blur(20px)'
					},
					'60%': {
						opacity: '0.6',
						transform: 'scale(1.15) translateY(30px)',
						filter: 'blur(10px)'
					},
					'100%': {
						opacity: '0.4',
						transform: 'scale(1) translateY(0px)',
						filter: 'blur(15px)'
					}
				},
				'ambient-pulse': {
					'0%, 100%': {
						opacity: '0.4',
						transform: 'scale(1) translateY(0px)',
						filter: 'blur(15px)',
						boxShadow: '0 0 80px hsl(180 100% 50% / 0.2)'
					},
					'50%': {
						opacity: '0.7',
						transform: 'scale(1.1) translateY(-20px)',
						filter: 'blur(10px)',
						boxShadow: '0 0 120px hsl(180 100% 50% / 0.4)'
					}
				},
				'cinematic-float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
						opacity: '0.3'
					},
					'33%': {
						transform: 'translateY(-25px) translateX(15px) rotate(1deg) scale(1.05)',
						opacity: '0.7'
					},
					'66%': {
						transform: 'translateY(-10px) translateX(-10px) rotate(-0.5deg) scale(0.95)',
						opacity: '0.5'
					}
				},
				'materialize': {
					'0%': {
						opacity: '0',
						transform: 'translateY(80px) scale(0.8)',
						filter: 'blur(20px)',
						clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
					},
					'20%': {
						opacity: '0.3',
						transform: 'translateY(50px) scale(0.9)',
						filter: 'blur(15px)',
						clipPath: 'polygon(0 80%, 100% 80%, 100% 100%, 0% 100%)'
					},
					'40%': {
						opacity: '0.6',
						transform: 'translateY(20px) scale(0.95)',
						filter: 'blur(8px)',
						clipPath: 'polygon(0 40%, 100% 40%, 100% 100%, 0% 100%)'
					},
					'60%': {
						opacity: '0.8',
						transform: 'translateY(5px) scale(0.98)',
						filter: 'blur(4px)',
						clipPath: 'polygon(0 20%, 100% 20%, 100% 100%, 0% 100%)'
					},
					'80%': {
						opacity: '0.9',
						transform: 'translateY(-5px) scale(1.02)',
						filter: 'blur(1px)',
						clipPath: 'polygon(0 5%, 100% 5%, 100% 100%, 0% 100%)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0px)',
						clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'breathe': 'breathe 4s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'fadeInUp': 'fadeInUp 1s ease-out forwards',
				'scaleX': 'scaleX 2s ease-out forwards',
				'slideInLeft': 'slideInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
				'slideInRight': 'slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
				'slideOutLeft': 'slideOutLeft 0.5s ease-in',
				'slideOutRight': 'slideOutRight 0.5s ease-in',
				'typing': 'typing 2s steps(20, end), blink 1s infinite',
				'morphing': 'morphing 8s ease-in-out infinite',
				'cinematic-fade': 'cinematic-fade 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
				'cinematic-breathe': 'cinematic-breathe 8s ease-in-out infinite',
				'cinematic-float': 'cinematic-float 10s ease-in-out infinite',
				'ambient-emerge': 'ambient-emerge 3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'ambient-pulse': 'ambient-pulse 6s ease-in-out infinite',
				'materialize': 'materialize 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
