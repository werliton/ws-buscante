import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { BooksProvider } from '@/context/books';

import newrelic from 'newrelic';
import Head from 'next/head';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], style: 'normal' });

export const metadata: Metadata = {
	title: 'Buscante',
	description: 'Sua estante virtual de livros',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const browserTimingHeader = newrelic.getBrowserTimingHeader({
		hasToRemoveScriptWrapper: true,
	});
	return (
		<html lang='pt-BR'>
			<Head>
				<script type='text/javascript' dangerouslySetInnerHTML={{ __html: browserTimingHeader }} />
			</Head>
			<body className={poppins.className}>
				<BooksProvider>
					<Header />
					{children}
				</BooksProvider>
			</body>
		</html>
	);
}
