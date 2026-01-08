import { useContext, useState } from "react";
import { WebsocketContext } from "../contexts/WebsocketContext";
import {
    Page,
    Sidebar,
    SidebarTitle,
    SidebarButton,
    Main,
    Card,
    Title,
    Section,
    SectionTitle,
    Row,
    Input,
    Select,
    Button,
    ButtonRow,
    TeamGrid,
    TeamCard,
    TeamTitle,
    LogoPreview,
    LogoImg,
    Column,
    PlayerList,
    PlayerRow,
    AddPlayerButton,
} from "./ControlPanel.style";

type Caster = {
    active: boolean;
    name: string;
    social: string;
    video: string;
};

type Player = {
    name: string;
    camera: string;
};

export const ControlPanel = () => {
    const websocket = useContext(WebsocketContext);

    const [title, setTitle] = useState("");
    const [bestOf, setBestOf] =
        useState<"bo1" | "bo3" | "bo5" | "bo7" | "bo+">("bo5");

    const [leftTeam, setLeftTeam] = useState({ name: "", logo: "" });
    const [rightTeam, setRightTeam] = useState({ name: "", logo: "" });

    const [leftPlayers, setLeftPlayers] = useState<Player[]>([]);
    const [rightPlayers, setRightPlayers] = useState<Player[]>([]);

    const [casters, setCasters] = useState<Caster[]>([
        { active: false, name: "", social: "", video: "" },
    ]);

    const sendStream = () => {
        websocket.send("overlay", "stream_info", { title, bestOf });
    };

    const sendTeams = () => {
        websocket.send("overlay", "teams", {
            left: leftTeam,
            right: rightTeam,
        });
    };

    const sendCasters = () => {
        websocket.send("overlay", "casters", {
            caster1: casters[0] ?? null,
            caster2: casters[1] ?? null,
            caster3: casters[2] ?? null,
        });
    };

    const switchSides = () => {
        const left = rightTeam;
        const right = leftTeam;

        setLeftTeam(left);
        setRightTeam(right);

        websocket.send("overlay", "teams", { left, right });
    };

    const showScene = (scene: string) => {
        websocket.send("overlay", "scene", scene);
    };

    const newSeries = () => {
        websocket.send("overlay", "new_series", true);
    };

    const addCaster = () => {
        if (casters.length >= 3) return;
        setCasters([
            ...casters,
            { active: false, name: "", social: "", video: "" },
        ]);
    };

    const updateCaster = (index: number, updated: Partial<Caster>) => {
        setCasters((prev) =>
            prev.map((c, i) => (i === index ? { ...c, ...updated } : c))
        );
    };

    return (
        <Page>
            <Sidebar>
                <SidebarTitle>Scenes</SidebarTitle>
                <SidebarButton onClick={() => showScene("overlay")}>
                    Overlay
                </SidebarButton>
                <SidebarButton onClick={() => showScene("scoreboard")}>
                    Scoreboard
                </SidebarButton>
                <SidebarButton onClick={() => showScene("caster")}>
                    Casters
                </SidebarButton>
                <SidebarButton onClick={() => showScene("starting")}>
                    Starting Soon
                </SidebarButton>
                <SidebarButton onClick={() => showScene("brb")}>
                    BRB
                </SidebarButton>
                <SidebarButton onClick={() => showScene("ending")}>
                    Ending
                </SidebarButton>
            </Sidebar>

            <Main>
                <Card>
                    <Title>Control Panel</Title>

                    <Section>
                        <SectionTitle>Stream Info</SectionTitle>
                        <Row>
                            <Input
                                placeholder="Stream Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Select
                                value={bestOf}
                                onChange={(e) =>
                                    setBestOf(e.target.value as any)
                                }
                            >
                                <option value="bo1">BO1</option>
                                <option value="bo3">BO3</option>
                                <option value="bo5">BO5</option>
                                <option value="bo7">BO7</option>
                                <option value="bo+">BO+</option>
                            </Select>
                        </Row>

                        <ButtonRow>
                            <Button variant="secondary" onClick={sendStream}>
                                Update Stream
                            </Button>
                        </ButtonRow>
                    </Section>

                    <Section>
                        <SectionTitle>Teams</SectionTitle>

                        <TeamGrid>
                            <TeamCard>
                                <TeamTitle>Blue Team</TeamTitle>

                                <LogoPreview>
                                    {leftTeam.logo ? (
                                        <LogoImg src={leftTeam.logo} />
                                    ) : (
                                        <span>Logo Preview</span>
                                    )}
                                </LogoPreview>

                                <Column>
                                    <Input
                                        placeholder="Team Name"
                                        value={leftTeam.name}
                                        onChange={(e) =>
                                            setLeftTeam({
                                                ...leftTeam,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                    <Input
                                        placeholder="Logo URL"
                                        value={leftTeam.logo}
                                        onChange={(e) =>
                                            setLeftTeam({
                                                ...leftTeam,
                                                logo: e.target.value,
                                            })
                                        }
                                    />
                                </Column>
                            </TeamCard>

                            <TeamCard>
                                <TeamTitle>Orange Team</TeamTitle>

                                <LogoPreview>
                                    {rightTeam.logo ? (
                                        <LogoImg src={rightTeam.logo} />
                                    ) : (
                                        <span>Logo Preview</span>
                                    )}
                                </LogoPreview>

                                <Column>
                                    <Input
                                        placeholder="Team Name"
                                        value={rightTeam.name}
                                        onChange={(e) =>
                                            setRightTeam({
                                                ...rightTeam,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                    <Input
                                        placeholder="Logo URL"
                                        value={rightTeam.logo}
                                        onChange={(e) =>
                                            setRightTeam({
                                                ...rightTeam,
                                                logo: e.target.value,
                                            })
                                        }
                                    />
                                </Column>
                            </TeamCard>
                        </TeamGrid>

                        <ButtonRow>
                            <Button variant="secondary" onClick={sendTeams}>
                                Update Teams
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={switchSides}
                            >
                                Switch Sides
                            </Button>
                        </ButtonRow>
                    </Section>

                    <Section>
                        <SectionTitle>Series</SectionTitle>
                        <ButtonRow>
                            <Button
                                variant="secondary"
                                onClick={newSeries}
                            >
                                New Series
                            </Button>
                        </ButtonRow>
                    </Section>

                    <Section>
                        <SectionTitle>Caster Info</SectionTitle>

                        {casters.map((caster, index) => (
                            <Row key={index}>
                                <input
                                    type="checkbox"
                                    checked={caster.active}
                                    onChange={(e) =>
                                        updateCaster(index, {
                                            active: e.target.checked,
                                        })
                                    }
                                />

                                <Input
                                    placeholder="Name"
                                    value={caster.name}
                                    onChange={(e) =>
                                        updateCaster(index, {
                                            name: e.target.value,
                                        })
                                    }
                                />

                                <Input
                                    placeholder="@social"
                                    value={caster.social}
                                    onChange={(e) =>
                                        updateCaster(index, {
                                            social: e.target.value,
                                        })
                                    }
                                />

                                <Input
                                    placeholder="Video URL"
                                    value={caster.video}
                                    onChange={(e) =>
                                        updateCaster(index, {
                                            video: e.target.value,
                                        })
                                    }
                                />
                            </Row>
                        ))}

                        <ButtonRow>
                            <Button
                                variant="secondary"
                                onClick={addCaster}
                                disabled={casters.length >= 3}
                            >
                                Add Caster
                            </Button>

                            <Button
                                variant="secondary"
                                onClick={sendCasters}
                            >
                                Update Casters
                            </Button>
                        </ButtonRow>
                    </Section>
                </Card>
            </Main>
        </Page>
    );
};
