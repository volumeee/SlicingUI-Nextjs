

export default function () {
    return (
        <article>
            <div className="flex">
                <div className="pt-6 w-7/12">
                    <img src="/featured-thumbnail.png" className="rounded-xl w-full" />
                </div>
                <div className="w-6/12 px-12 pt-6">
                    <div className="flex items-center text-white/60 space-x-4 text-sm">
                        <div className="uppercase">
                            UI Design
                        </div>
                        <span>&bull;</span>
                        <div className="">
                            July 20, 2021
                        </div>
                    </div>
                    <h2 className="text-2xl mt-4">
                        Understanding color theory in UI design and how to apply it in your projects to create a better user experience.
                    </h2>
                    <p className="text-white/60 mt-4 w-11/12 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ey of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="flex items-center mt-4">
                        <img src="/author-1.png" className="rounded-full w-10 h-10 object-cover" />
                        <div className="ml-2 items-center">
                            <h3 className="text-sm text-white">
                                Leyla Sparks
                            </h3>
                            <div className="text-sm text-white/60">
                                UI Designer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
