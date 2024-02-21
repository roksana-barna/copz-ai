import React from 'react';

const Accordian = () => {
    return (

        <div>
            <div className='text-center text-white mt-6'>
                <div className="text-2xl font-semibold mb-4">Frequently Asked Questions</div>

                <p className="mb-4 font-thin text-xs">
                    Our support team will get assistance from AI-powered suggestions,<br/> making it quicker than ever to handle support requests.
                </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 text-slate-300'>
                    <div className="collapse collapse-plus bg-slate-900 mr-4 mt-4 font-normal">
                        <input type="radio" name="my-accordion" id="accordion-1" defaultChecked />
                        <div className="collapse-title text-base font-medium cursor-pointer">
                            What is a copy?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, you can write long articel for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what are expecting!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-slate-900 ml-4 mt-4 font-normal">
                        <input type="radio" name="my-accordion" id="accordion-3" />
                        <div className="collapse-title text-base font-medium cursor-pointer ">
                            Yes, you can write long articles with CopyGen.
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes, you can write long articles for your blog posts, product descriptions, or any long article with CopyGen.
                                We're always updating our templates and tools, so let us know what you are expecting!
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-slate-900 mr-4  mt-4 font-normal">
                        <input type="radio" name="my-accordion" id="accordion-4" />
                        <div className="collapse-title text-base font-medium cursor-pointer ">
                            Who founded BRIX Templates?
                        </div>
                        <div className="collapse-content">
                            <p>Answer for "Who founded BRIX Templates?" goes here.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-slate-900 ml-4  mt-4 font-normal">
                        <input type="radio" name="my-accordion" id="accordion-5" />
                        <div className="collapse-title text-base font-medium cursor-pointer">
                            Does CopyGen write long articles?
                        </div>
                        <div className="collapse-content">
                            <p>Answer for "Does CopyGen write long articles?" goes here.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-slate-900  mt-4 font-normal">
                        <input type="radio" name="my-accordion" id="accordion-6" />
                        <div className="collapse-title text-base font-medium cursor-pointer">
                            Who are the Webflow founders?
                        </div>
                        <div className="collapse-content">
                            <p>Answer for "Who are the Webflow founders?" goes here.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-slate-900 ml-4 mt-4 font-normal">
                        <input type="radio" name="my-accordion" id="accordion-7" />
                        <div className="collapse-title text-base font-medium cursor-pointer">
                            Is NoCode the future of the web?
                        </div>
                        <div className="collapse-content">
                            <p>Answer for "Is NoCode the future of the web?" goes here.</p>
                        </div>
                    </div>
                </div>
            </div>
           
            );
};

            export default Accordian;
