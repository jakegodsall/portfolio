import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

const inter = Inter({ subsets: ['latin'] });

const data = {
    projects: [
        {
            name: 'Ecommerce Site',
            githubURL: 'https://github.com/jakegodsall/ecommerce-site-frontend-practice',
            liveURL: 'https://jakegodsall-ecommerce-site.netlify.app/',
            skills: ['react', 'tailwindcss'],
            screenshot: '/assets/projects/ecommerce-store.png',
        },
        {
            name: 'Interactive Card Details Form',
            githubURL: 'https://github.com/jakegodsall/interactive-card-details-form',
            liveURL: 'https://jakegodsall-card-details-form.netlify.app/',
            skills: ['react', 'tailwindcss', 'next', 'framer-motion'],
            screenshot: '/assets/projects/interactive-card-form.png',
        },
        {
            name: 'Expenses Chart Component',
            githubURL: 'https://github.com/jakegodsall/expenses-chart-component-frontend-practice',
            liveURL: 'https://jakegodsall-expenses-chart.netlify.app',
            skills: ['html', 'css', 'javascript', 'd3'],
            screenshot: '/assets/projects/expense-chart.png',
        },
        {
            name: 'Calculator App',
            githubURL: 'https://github.com/jakegodsall/calculator-app-frontend-practice',
            liveURL: 'https://jakegodsall-calculator.netlify.app/',
            skills: ['html', 'css', 'javascript'],
            screenshot: '/assets/projects/calculator.png',
        },
        {
            name: 'Social Media Dashboard',
            githubURL: 'https://github.com/jakegodsall/social-media-dashboard-frontend',
            liveURL: 'https://jakegodsall-social-media-dashboard.netlify.app/',
            skills: ['html', 'css', 'javascript', 'react'],
            screenshot: '/assets/projects/social-media-dashboard.png',
        },
    ],
};
export default function Home() {
    return (
        <>
            <Head>
                <title>Jake | Full-stack Developer</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/assets/jg.svg' />
            </Head>
            <Navbar />
            <Main />
            <About />
            <Skills />
            <Projects projects={data.projects} />
        </>
    );
}
