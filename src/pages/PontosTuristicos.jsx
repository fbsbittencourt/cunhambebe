import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mountain, Info, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const touristSpots = [
    {
        id: 1,
        name: "Cachoeira do Itinguçu",
        difficulty: 2,
        entrance: "Parque Cunhambebe",
        description: "Trilha curta/moderada (~2,4 km) e ideal para banho.",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Cachoeira Véu da Noiva",
        difficulty: 3,
        entrance: "Parque Cunhambebe",
        description: "Trilha de mata, acesso um pouco mais longo.",
        image: "https://images.unsplash.com/photo-1546820272-9b2f6946db32?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Cachoeira do Rubião",
        difficulty: 2,
        entrance: "Parque Cunhambebe",
        description: "Trilha de 1 km com piscina natural.",
        image: "https://images.unsplash.com/photo-1518092497042-4f30d0752538?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Cachoeira da Bengala",
        difficulty: 2,
        entrance: "Parque Cunhambebe",
        description: "Curto acesso (~200 m) pela mata.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Ruínas do Antigo Teatro",
        difficulty: 1,
        entrance: "Parque Cunhambebe",
        description: "Atração histórica perto de trilha principal.",
        image: "https://images.unsplash.com/photo-1463183547458-6a2c760d0912?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Pontes da Estrada Imperial",
        difficulty: 1,
        entrance: "Parque Cunhambebe",
        description: "Fácil acesso por trilhas curtas.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Igreja Matriz de São João Marcos",
        difficulty: 1,
        entrance: "Parque Cunhambebe",
        description: "Histórica e cultural.",
        image: "https://images.unsplash.com/photo-1563297621-e7c65363351d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Pedra Chata",
        difficulty: 4,
        entrance: "Parque Cunhambebe",
        description: "Trilha mais longa com grande altitude para vista panorâmica.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 9,
        name: "Bico do Papagaio",
        difficulty: 3,
        entrance: "Parque Cunhambebe",
        description: "Trilha leve a moderada com cume rochoso.",
        image: "https://images.unsplash.com/photo-1509356395350-a9228d99c756?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 10,
        name: "Ribeirão das Lages",
        difficulty: 2,
        entrance: "Parque Cunhambebe",
        description: "Área de corredeiras e poços naturais.",
        image: "https://images.unsplash.com/photo-1533240226977-d5d22223bb35?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 11,
        name: "Travessia Sahy-Rubião / Rubião-Muriqui",
        difficulty: 4,
        entrance: "Parque Cunhambebe",
        description: "Percurso longo de travessia com vistas diversas.",
        image: "https://images.unsplash.com/photo-1565118531796-7a30127f4174?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 12,
        name: "Mirante do Sahy / Cânions",
        difficulty: 3,
        entrance: "Parque Cunhambebe",
        description: "Trilha com vistas bonitas sobre o vale e formações rochosas.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 13,
        name: "Cachoeiras do Rio Sahy",
        difficulty: 3,
        entrance: "Parque Cunhambebe",
        description: "Pequeno conjunto de quedas e piscinas naturais.",
        image: "https://images.unsplash.com/photo-1519098901909-b1553a1190af?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 14,
        name: "Pico das Três Orelhas",
        difficulty: 5,
        entrance: "Parque Cunhambebe",
        description: "Subida longa e técnica, indicada para trilheiros experientes.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 15,
        name: "Cachoeira da Bota & Cachoeira da Conquista",
        difficulty: 3,
        entrance: "Parque Cunhambebe",
        description: "Parte de trilha maior com várias quedas d'água.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop"
    }
];

const DifficultyStars = ({ level }) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className={`h-2 w-6 rounded-full ${i < level ? 'bg-forest' : 'bg-forest/20'
                        }`}
                />
            ))}
        </div>
    );
};

const TouristSpotCard = ({ spot, index }) => {
    const cardRef = useRef(null);
    const isEven = index % 2 === 0;

    useLayoutEffect(() => {
        const el = cardRef.current;

        gsap.fromTo(el,
            {
                y: 50,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <div
            ref={cardRef}
            className={`flex flex-col md:flex-row gap-8 items-center mb-24 last:mb-0 ${!isEven ? 'md:flex-row-reverse' : ''
                }`}
        >
            {/* Image Section */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl group">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                        src={spot.image}
                        alt={spot.name}
                        className="w-full h-full object-cover transition-transform duration-7000 ease-linear group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>

            {/* Content Section */}
            <div className={`w-full md:w-1/2 space-y-6 ${!isEven ? 'md:text-right text-right' : 'md:text-left text-left'}`}>
                <div className="space-y-2">
                    <div className={`flex items-center gap-2 text-earth font-medium uppercase tracking-wider text-sm ${!isEven ? 'justify-end' : 'justify-start'}`}>
                        <Mountain size={16} />
                        <span>Dificuldade nvl {spot.difficulty}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display text-forest font-bold leading-tight">
                        {spot.name}
                    </h2>
                </div>

                <div className={`flex items-center gap-2 ${!isEven ? 'justify-end' : 'justify-start'}`}>
                    <DifficultyStars level={spot.difficulty} />
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                    {spot.description}
                </p>

                <div className={`pt-4 border-t border-forest/10 space-y-3`}>
                    <div className={`flex items-center gap-3 text-forest font-medium ${!isEven ? 'justify-end' : 'justify-start'}`}>
                        <MapPin className="text-earth" size={20} />
                        <span>{spot.entrance}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PontosTuristicos = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        // Hero animation
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#Fdfbf7] overflow-x-hidden">
            <div className="pt-32 pb-20 px-6 container mx-auto">
                {/* Header */}
                <div className="text-center mb-32 max-w-4xl mx-auto">
                    <h1 className="hero-text text-5xl md:text-7xl font-display text-forest uppercase tracking-tighter mb-8">
                        Pontos <span className="text-earth">Turísticos</span>
                    </h1>
                    <p className="hero-text text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                        Explore as belezas naturais do Parque Estadual Cunhambebe.
                        Cachoeiras, trilhas e mirantes esperam por você.
                    </p>
                </div>

                {/* List of Spots */}
                <div className="max-w-6xl mx-auto">
                    {touristSpots.map((spot, index) => (
                        <TouristSpotCard key={spot.id} spot={spot} index={index} />
                    ))}
                </div>

                {/* Footer Message */}
                <div className="text-center mt-32 opacity-60">
                    <p className="text-sm uppercase tracking-widest text-forest">
                        Preserve a natureza • Respeite as regras do parque
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PontosTuristicos;