import LogoLight from 'components/icons/Full_Logo_Dark_Small.png'; //logo for light mode
import LogoDark from 'components/icons/Full_Logo_Light_Small.png'; //logo for dark mode
import Image from 'next/image';



export default function Logo () {
// this component will display the logo of the website
// it will display a dark logo when the theme is light and vice versa due to rules in globals.css
  
  return (
    <div className='w-28'>
      <Image
        className='logoDark'
        src={LogoDark}
        alt={`${process.env.SITE_NAME} logo`}
      />
      <Image
        className='logoLight'
        src={LogoLight}
        alt={`${process.env.SITE_NAME} logo`}
      />
    </div>
  );
}

