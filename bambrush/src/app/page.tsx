
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <h1>BAMBRUSH</h1>
                <h3>Introducing Bamboo Toothbrush - The Sustainable Alternative to Plastic Toothbrushes</h3>
                <button>Learn More</button>
            </div>
        </section>
    );
}

function ProductShowcase() {
    return (
        <section className="product-showcase">
            <div className="heading">
                <h1>Shop🛒</h1>
                <span><Link href={"/shop"}>More→</Link></span>
            </div>
            <div className="container">
            {/* Add product images and animation here */}
                <Image src="/pexels-karolina-grabowska-4465126.jpg" alt="Product Image 1" width={500} height={800} />
                <Image src="/.jpg" alt="Product Image 2" width={500} height={800} />
                {/* Add animation effect here */}
            </div>
        </section>
    );
}

function Features() {
    return (
        <section className="features">
            <div className="container">
                <ul>
                    <li>
                        <i className="icon-checkmark" />
                        <span>Feature 1</span>
                    </li>
                    <li>
                        <i className="icon-checkmark" />
                        <span>Feature 2</span>
                    </li>
                    <li>
                        <i className="icon-checkmark" />
                        <span>Feature 3</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

function CallToAction() {
    return (
        <section className="cta">
            <div className="container">
                <h2>Get Your BamBrush Today!</h2>
                <button>Buy Now</button>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <div>
            <Head>
                <title>BamBrush</title>
            </Head>
            <Hero />
            <ProductShowcase />
            <Features />
            <CallToAction />
        </div>
    );
}