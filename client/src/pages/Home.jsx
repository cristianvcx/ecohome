import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from "../components/ListingItem";

export default function Home() {
    const [offerListings, setOfferListings] = useState([]);
    const [saleListings, setSaleListings] = useState([]);
    const [rentListings, setRentListings] = useState([]);
    SwiperCore.use([Navigation])
    console.log(offerListings);
    useEffect(() => {
        const fetchOfferListings = async () => {
            try {
                const res = await fetch('/api/listing/get?offer=true&limit=4');
                const data = await res.json();
                setOfferListings(data);
                fetchRentListings();
            } catch (error) {
                console.log(error);
            }
        }
        const fetchRentListings = async () => {
            try {
                const res = await fetch('/api/listing/get?type=rent&limit=4');
                const data = await res.json();
                setRentListings(data);
                fetchSaleListings();
            } catch (error) {
                console.log(error);
            }
        };
        const fetchSaleListings = async () => {
            try {
                const res = await fetch('/api/listing/get?type=sale&limit=4');
                const data = await res.json();
                setSaleListings(data);
            } catch (error) {
                log(error);
            }
        }
        fetchOfferListings();
    }, []);
    return (
        <div>
            {/* top */}
            <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
                <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
                    Encuentra el lugar <span className="text-slate-500">perfecto</span>
                    <br />
                    para tu proximo hogar con facilidad
                </h1>
                <div className="text-gray-400 text-xs sm:text-sm">
                    EcoHome es el mejor lugar para encontrar tu próximo lugar perfecto para vivir.
                    <br />
                    Tenemos una amplia gama de propiedades para que usted elija.
                </div>
                <Link to={"/search"} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
                    Empezemos...
                </Link>
            </div>
            {/* swiper */}
            <Swiper navigation>
                {
                    offerListings && offerListings.length > 0 &&
                    offerListings.map((listing) => (
                        <SwiperSlide>
                            <div style={{ background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: "cover" }} className="h-[500px]" key={listing._id}></div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* listing results for offer, sale and rent */}
            <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
                {offerListings && offerListings.length > 0 && (
                    <div className="">
                        <div className="my-3">
                            <h2 className="text-2xl font-semibold text-slate-600">Ofertas recientes</h2>
                            <Link className="text-sm text-blue-800 hover:underline" to={'/search?offer=true'}>
                                Mostrar mas ofertas
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {offerListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
                {rentListings && rentListings.length > 0 && (
                    <div className="">
                        <div className="my-3">
                            <h2 className="text-2xl font-semibold text-slate-600">Lugares recientes en alquiler</h2>
                            <Link className="text-sm text-blue-800 hover:underline" to={'/search?type=rent'}>
                                Mostrar más lugares en alquiler
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {rentListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
                {saleListings && saleListings.length > 0 && (
                    <div className="">
                        <div className="my-3">
                            <h2 className="text-2xl font-semibold text-slate-600">Ofertas lugares en venta</h2>
                            <Link className="text-sm text-blue-800 hover:underline" to={'/search?type=sale'}>
                            Mostrar más lugares en venta
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {saleListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
