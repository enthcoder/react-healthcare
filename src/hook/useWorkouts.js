import { useEffect, useState } from "react";

const useWorkouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch("/workoutsData.json")
            .then((res) => res.json())
            .then((data) => setWorkouts(data));
    }, []);

    return [workouts, setWorkouts];
};

export default useWorkouts;
