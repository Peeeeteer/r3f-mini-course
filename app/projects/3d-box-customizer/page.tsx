"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";


const BoxCustomizer = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-center">
                <Button
                    className="mt-8"
                    onClick={() => window.history.back()}
                >
                    Back
                </Button>
            </div>
            <br />

            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Box customizer </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Using three.js, react, figma </p>
                <br />
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>1 Milestone: Setup</Timeline.Time>
                            <Timeline.Title>Start with setting up react</Timeline.Title>
                            <Timeline.Body>
                                Start with a new react project and install three.js library
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>2 Milestone: Add the file</Timeline.Time>
                            <Timeline.Title>Import the box into the scene and display it</Timeline.Title>
                            <Timeline.Body>
                                This a bit harder one so take your time with this one
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>3 Milestone: Modify the file</Timeline.Time>
                            <Timeline.Title>Start morphing the height and width</Timeline.Title>
                            <Timeline.Body>
                                This is actually not that hard, but sounds hard tho
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>3 Milestone: Modify the file</Timeline.Time>
                            <Timeline.Title>Start morphing the height and width</Timeline.Title>
                            <Timeline.Body>
                                This is actually not that hard, but sounds hard tho
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>3 Milestone: Modify the file</Timeline.Time>
                            <Timeline.Title>Start morphing the height and width</Timeline.Title>
                            <Timeline.Body>
                                This is actually not that hard, but sounds hard tho
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>3 Milestone: Modify the file</Timeline.Time>
                            <Timeline.Title>Start morphing the height and width</Timeline.Title>
                            <Timeline.Body>
                                This is actually not that hard, but sounds hard tho
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>3 Milestone: Modify the file</Timeline.Time>
                            <Timeline.Title>Start morphing the height and width</Timeline.Title>
                            <Timeline.Body>
                                This is actually not that hard, but sounds hard tho
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>3 Milestone: Modify the file</Timeline.Time>
                            <Timeline.Title>Start morphing the height and width</Timeline.Title>
                            <Timeline.Body>
                                This is actually not that hard, but sounds hard tho
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
        </section>

    )
}

export default BoxCustomizer