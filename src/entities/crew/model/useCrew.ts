import { useQuery } from "@tanstack/react-query"
import { fetchCrewById,fetchCrewsMoivesById } from "../api/fetchApi"

export const useCrew = () => {
    const getCrewById = (id: string) => useQuery({
        queryKey: ["crewKey", id],
        queryFn: () => fetchCrewById(id)
    })

    const getCrewsMoviesById = (id: string) => useQuery({
        queryKey: ["crewKey", id, "crewMovie"],
        queryFn: () => fetchCrewsMoivesById(id)
    })

    return { getCrewById, getCrewsMoviesById }
}