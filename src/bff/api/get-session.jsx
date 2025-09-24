import { transformSession } from "../transformers/transform-session";

export const getSession = async (hash) => {
    try {
        const res = await fetch(`http://localhost:3004/sessions?hash=${hash}`);
        const loadedSessions = await res.json();

        if (!loadedSessions || loadedSessions.length === 0) return null;

        const transformed = transformSession(loadedSessions[0]);
        return transformed;
    } catch (err) {
        return null;
    }
};
