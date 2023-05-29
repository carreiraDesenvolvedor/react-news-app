import {
  Box,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import React, {
  FC,
  ReactElement,
  useContext,
  useState,
} from 'react';
import { LoggedLayout } from '../../layouts/logged';
import { PageTopActions } from '../../components/page-top-actions';
import { SectionHomeSearch } from '../../sections/home/home-search';
import { SectionHomeArticles } from '../../sections/home/home-articles';
import {
  IApiArticlesFindResponse,
  apiArticlesFind,
} from '../../api/article/find';
import {
  ArticleContext,
  IArticleContext,
} from '../../context/article';
import { IInnerAlert } from '../../components/inner-alert';
import Joyride, {
  ACTIONS,
  CallBackProps,
  EVENTS,
  Step,
} from 'react-joyride';
const steps: Step[] = [
  {
    target: '.my-first-step',
    content:
      'Welcome to the best article search engine in the universe, this is where all the magic happens.',
    disableBeacon: true,
  },
  {
    target: '.my-second-step',
    content:
      "The only thing you'll need to do is type in the keywords you want to search for.",
  },
  {
    target: '.my-third-step',
    content: 'And then click that button to search.',
  },
  {
    target: '.my-fourth-step',
    content: 'The articles will be displayed here',
  },
  {
    target: '.article-title',
    content: 'The title of the article appears here.',
  },
  {
    target: '.article-description',
    content: 'The article description appears here',
  },
  {
    target: '.article-published-date',
    content: 'Publication date appears here',
  },
  {
    target: '.article-source',
    content: 'Article source appears here',
  },
  {
    target: '.article-link',
    content: 'To open the article you should click here!',
  },
  {
    target: '.my-second-step',
    content: 'Thank you, I hope you enjoyed the tour ;)',
  },
];
export const HomePage: FC = (): ReactElement => {
  const [tourProps, setTourProps] = React.useState({
    run: true,
    step: 0,
  });

  const [showGuideArticles, setShowGuideArticles] =
    useState<boolean>(false);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { index, action, type } = data;
    if (
      index === 2 &&
      action === ACTIONS.NEXT &&
      type === EVENTS.STEP_AFTER
    ) {
      setShowGuideArticles(true);
    }

    if ([EVENTS.STEP_AFTER.toString()].includes(type)) {
      const newStepIndex =
        index + (action === ACTIONS.PREV ? -1 : 1);
      if (action !== ACTIONS.PREV) {
        setTourProps({ run: false, step: index });
        setTimeout(
          () =>
            setTourProps({ step: newStepIndex, run: true }),
          200,
        );
      }
    } else if (type === EVENTS.TOUR_END) {
      setShowGuideArticles(false);
    }
  };

  const {
    state: { form },
  } = useContext(ArticleContext) as IArticleContext;

  const [noData, setNoData] =
    React.useState<boolean>(false);

  const [searchAlerts, setSearchAlerts] = React.useState<
    IInnerAlert[]
  >([]);

  const [articles, setArticles] =
    React.useState<IApiArticlesFindResponse>();

  const articleFindMutation = apiArticlesFind({
    onSuccess: ({ data }) => {
      if (!data.length) setNoData(true);
      setArticles(data);
    },
    onError: (error) => {
      const alerts: IInnerAlert[] = [];
      Object.keys(error.data).map((key: string) => {
        alerts.push({
          color: 'error',
          severity: 'error',
          message: <div>{error.data[key]}</div>,
        });
      });
      setSearchAlerts(alerts);
    },
  });
  const onFormSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    articleFindMutation.mutate({
      keywords: form.keywords.split(','),
    });
    setSearchAlerts([]);
    setNoData(false);
  };

  return (
    <LoggedLayout>
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        hideCloseButton
        scrollToFirstStep
        showProgress
        showSkipButton
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
        run={tourProps.run}
        steps={steps}
        stepIndex={tourProps.step}
      />
      <Box component={'main'} sx={[{ py: 8 }]}>
        <Container maxWidth={'lg'}>
          <Stack spacing={3}>
            <PageTopActions title="Articles Feed" />
            <SectionHomeSearch
              search_alerts={searchAlerts}
              onFormSubmit={onFormSubmit}
            />
            {!articleFindMutation.isLoading &&
              Array.isArray(articles) &&
              articles.length > 0 && (
                <SectionHomeArticles articles={articles} />
              )}

            {articleFindMutation.isLoading && (
              <LinearProgress />
            )}

            {noData && (
              <Typography variant="h4">
                We didn&apos;t find any articles related to
                your keywords, please try again.
              </Typography>
            )}
            {showGuideArticles && (
              <Box className="my-fourth-step">
                <SectionHomeArticles
                  articles={[
                    {
                      title:
                        'Ireland to introduce world-first alcohol health labelling policy',
                      description:
                        'Labels will alert people to calories, risk of cancer and liver disease and dangers of drinking while pregnantIreland is to become the first country in the world to mandate health labelling on alcoholic drinks to alert people to calorie content, grams of alcoh…...',
                      source: {
                        id: '',
                        name: 'The Guardian',
                      },
                      urlArticle: '',
                      publishedAt:
                        new Date().getTime() / 1000,
                      author: '',
                      urlThumbnail: '',
                    },
                    {
                      title:
                        'Netflix starts charging for account sharing in the US',
                      description:
                        "Netflix has been quick to act on its plans to charge for account sharing in the US. The streaming service is notifying American customers that they'll need to pay $8 per month for viewers outside of the household who want to share the account. As in other cou…...",
                      source: {
                        id: '',
                        name: 'Engadget',
                      },
                      urlArticle: '',
                      publishedAt:
                        (new Date().getTime() - 20000) /
                        1000,
                      author: '',
                      urlThumbnail: '',
                    },
                    {
                      title:
                        "US Surgeon General says social media can pose 'a profound risk' to teens' mental health",
                      description:
                        'US Surgeon General Vivek Murthy has stated in an advisory that "we cannot conclude social media is sufficiently safe for children and adolescents." Murthy argued that the potential harms of social media outweigh the benefits for younger users.Citing...',
                      source: {
                        id: '',
                        name: 'The New York Times',
                      },
                      urlArticle: '',
                      publishedAt:
                        (new Date().getTime() - 30000) /
                        1000,
                      author: '',
                      urlThumbnail: '',
                    },
                  ]}
                />
              </Box>
            )}
          </Stack>
        </Container>
      </Box>
    </LoggedLayout>
  );
};
