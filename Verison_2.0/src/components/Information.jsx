import Button from './Button'
import Section from './Section'

const Information = () => {
    return (

        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customePadddings id="Information">
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Iron Wok
                    </h1>
                    <p className="body-1 mas-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Iron Wok is a family-owned Chinese restaurant that has been serving both Americanized and authentic Chinese cuisine for the past seven years. We strive to stay deeply connected to our roots and the community we serve, embracing simplicity, a sense of humor, and a genuine love for honest food, good company, and shared experiences.
                    </p>
                    {/* <Button href="/Menu" white>
                        food menu
                    </Button> */}
                </div>
                <div>

                </div>
            </div>

        </Section>
    )
};

export default Information