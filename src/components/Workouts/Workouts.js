import React from "react";
import { Container, Row } from "react-bootstrap";
import useWorkouts from "../../hook/useWorkouts";
import SingleWorkout from "../SingleWorkout/SingleWorkout";

const Workouts = () => {
    const [workouts] = useWorkouts();

    return (
        <div className="mt-5 text-center">
            <h1 className="fw-bold">Everyday Workouts</h1>
            <hr className="mx-auto w-25" />
            <p className="mx-auto text-secondary w-75">
                <small>
                    Regular physical activity can improve your muscle strength
                    and boost your endurance. Exercise delivers oxygen and
                    nutrients to your tissues and helps your cardiovascular
                    system work more efficiently.
                </small>
            </p>
            <Container>
                <Row
                    xs={1}
                    md={2}
                    lg={4}
                    className="m-3 g-4 d-flex justify-content-center"
                >
                    {workouts.map((workout) => (
                        <SingleWorkout
                            key={workout.id}
                            workout={workout}
                        ></SingleWorkout>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Workouts;
