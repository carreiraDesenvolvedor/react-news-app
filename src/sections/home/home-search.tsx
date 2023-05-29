import { Search } from '@mui/icons-material';
import React, { useContext } from 'react';
import {
  InputAdornment,
  SvgIcon,
  TextField,
} from '@mui/material';
import { FC, ReactElement } from 'react';
import {
  IInnerAlert,
  InnerAlert,
} from '../../components/inner-alert/index';
import {
  CardForm,
  ICardFormOnSubmit,
} from '../../components/card/form';
import {
  ArticleContext,
  IArticleContext,
} from '../../context/article';

interface ISectionHomeSearch extends ICardFormOnSubmit {
  search_alerts?: IInnerAlert[];
}

export const SectionHomeSearch: FC<ISectionHomeSearch> = ({
  onFormSubmit,
  search_alerts,
}): ReactElement => {
  const {
    state: { form },
    updateState,
  } = useContext(ArticleContext) as IArticleContext;

  return (
    <CardForm
      className="my-first-step"
      onFormSubmit={(e) => {
        onFormSubmit(e);
      }}
      submitButtonText="Search"
    >
      <TextField
        className="my-second-step"
        required={true}
        value={form.keywords}
        onChange={(event) => {
          updateState({
            form: {
              keywords: event.target.value,
            },
          });
        }}
        fullWidth
        label="Keywords"
        placeholder="Search by keywords"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon color="action" fontSize="small">
                <Search />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
        helperText="If you want to search for more than one content, separate it with a comma.eg: brazil, croatia..."
      />
      {Array.isArray(search_alerts) &&
        search_alerts.length > 0 &&
        search_alerts.map((alert, key) => (
          <InnerAlert
            key={key}
            color={alert.color}
            severity={alert.severity}
            message={alert.message}
          />
        ))}
    </CardForm>
  );
};
