import React, { useContext, useMemo } from "react";
import {
    BackImage,
    CasterScreenArea,
    CasterBox,
    CasterTitle,
    CasterPiece,
    CasterBackground,
    CasterSocial,
    CasterScreenBackground,
    CasterScreenTitle,
} from "./CastScreen.style";
import { OverlayControlContext } from "../../contexts/OverlayControlProvider";

export const CasterScreenExp = React.memo(() => {
    const control = useContext(OverlayControlContext);

    const casters = useMemo(() => {
        if (!control.casters) return [];

        return Object.values(control.casters)
            .filter(Boolean)
            .filter((caster: any) => caster.active);
    }, [control.casters]);

    if (casters.length === 0) return null;

    return (
        <BackImage>
            <CasterScreenBackground>
                <CasterScreenTitle>The Casters</CasterScreenTitle>
            </CasterScreenBackground>

            <CasterScreenArea>
                {casters.map((caster: any) => (
                    <CasterPiece key={caster.id ?? caster.name}>
                        <CasterBox>
                            {caster.video && (
                                <iframe
                                    src={caster.video}
                                    title={caster.name}
                                    loading="lazy"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                />
                            )}
                        </CasterBox>

                        <CasterBackground>
                            <CasterTitle>{caster.name}</CasterTitle>
                            <CasterSocial>{caster.social}</CasterSocial>
                        </CasterBackground>
                    </CasterPiece>
                ))}
            </CasterScreenArea>
        </BackImage>
    );
});