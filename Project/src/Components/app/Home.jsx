import {ProductCard} from "../prodcard/Pc.jsx";
import Panel from "../top-panel/Panel.jsx";

export function Home() {
    const products = [
        { id: 1, title: "iPhone 17 Pro 256 GB Silver", price: 3229.99, image:"/src/Components/app/tm-dg-sbp-1105-sm-3725_1.webp"},
        { id: 2, title: "iPhone 13 128 GB Midnight", price: 1229.99, image: "/src/Components/app/tm-dg-sbp-1105-sm-1510_12.png" },
        { id: 3, title: "Xiaomi Redmi 15 8/256 GB NFC Black", price: 429.99, image: "/src/Components/app/tm-dg-sbp-1105-sm-3672_1_1.png" },
        { id: 4, title: "OPPO Reno14 F 8/256 GB Opal Blue", price: 869.99, image: "/src/Components/app/tm-dg-sbp-1105-sm-3779_1.png" },
        { id: 5, title: "Samsung Galaxy S25 (SM-S931B) 12/128 GB Silver", price: 1669.99, image: "/src/Components/app/tm-dg-sbp-1105-sm-3289_11.png" },
        { id: 6, title: "Xiaomi Redmi Note 14 6/128 GB Midnight Black", price: 399.99, image: "/src/Components/app/tm-dg-sbp-1105-sm-3234_12.png" }
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </>
    );
}
