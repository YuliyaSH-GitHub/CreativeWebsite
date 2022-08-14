$(document).ready(function () {
    $('.b-header__title_decor').addClass("hidden").viewportChecker({
        classToAdd: 'animate__zoomIn',
        offset: 100,
        classToRemove: 'hidden'

    });
    $('.b-whoWeAre__divContent').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__slideInLeft',
        offset: 350,
        classToRemove: 'hidden'
    });
    $('.b-whoWeAre__image').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__slideInRight',
        offset: 350,
        classToRemove: 'hidden'
    });

    $('.b-whatWeDo__title').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__slideInRight',
        offset: 300,
        classToRemove: 'hidden'
    });

    $('.b-whatWeDo__gridItem').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__slideInDown',
        offset: 250,
        classToRemove: 'hidden'
    });

    $('.b-howWeWorks__title').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__fadeInTopRight',
        offset: 300,
        classToRemove: 'hidden'
    });

    $('.b-howWeWorks__text').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__slideInDown',
        offset: 400,
        classToRemove: 'hidden'
    });

    $('.b-howWeWorks_linkDecor').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__zoomInRight',
        offset: 300,
        classToRemove: 'hidden'
    });
    $('.b-howWeWorks__slide').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__slideInRight',
        offset: 400,
        classToRemove: 'hidden'
    });

    $('.b-ourCreativeTeam__title').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__fadeInTopRight',
        offset: 300,
        classToRemove: 'hidden'
    });

    $('.b-ourCreativeTeam__slider').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__zoomInRight',
        offset: 300,
        classToRemove: 'hidden'
    });

    $('.b-whatClientSays__title').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__fadeInBottomRight',
        offset: 300,
        classToRemove: 'hidden'
    });

    $('.b-whatClientSays__imageWrap').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__backInLeft',
        offset: 200,
        classToRemove: 'hidden'
    });

    $('.b-whatClientSays__quoteDiv').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__fadeInRightBig',
        offset: 300,
        classToRemove: 'hidden'
    });

    $('.b-getInTouch__title').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__jackInTheBox',
        offset: 300,
        classToRemove: 'hidden'
    });

    $('.b-getInTouch__grid').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__fadeInUpBig',
        offset: 250,
        classToRemove: 'hidden'
    });

    $('.b-getInTouch__socialIcons').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__slideInUp',
        offset: 50,
        classToRemove: 'hidden'
    });

    $('.b-getInTouch__copyright').addClass("hidden").viewportChecker({
        classToAdd: 'animate__animated animate__slideInUp',
        offset: 10,
        classToRemove: 'hidden'
    });
});