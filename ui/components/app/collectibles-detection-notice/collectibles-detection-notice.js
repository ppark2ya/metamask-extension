import React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '../../ui/box';
import Dialog from '../../ui/dialog';
import Typography from '../../ui/typography/typography';
import {
  COLORS,
  TYPOGRAPHY,
  TEXT_ALIGN,
  FONT_WEIGHT,
  DISPLAY,
  FLEX_DIRECTION,
} from '../../../helpers/constants/design-system';
import { useI18nContext } from '../../../hooks/useI18nContext';
import Button from '../../ui/button';
import { EXPERIMENTAL_ROUTE } from '../../../helpers/constants/routes';
import { setCollectiblesDetectionNoticeDismissed } from '../../../store/actions';

export default function CollectiblesDetectionNotice() {
  const t = useI18nContext();
  const history = useHistory();

  return (
    <Box className="collectibles-detection-notice">
      <Dialog type="message" className="collectibles-detection-notice__message">
        <button
          onClick={() => setCollectiblesDetectionNoticeDismissed()}
          className="fas fa-times collectibles-detection-notice__message__close-button"
          data-testid="collectibles-detection-notice-close"
        />
        <Box display={DISPLAY.FLEX}>
          <Box paddingTop={1}>
            <i
              style={{
                fontSize: '1rem',
                color: 'var(--color-primary-default)',
              }}
              className="fa fa-info-circle"
            />
          </Box>
          <Box paddingLeft={2}>
            <Typography
              color={COLORS.TEXT_DEFAULT}
              align={TEXT_ALIGN.LEFT}
              variant={TYPOGRAPHY.H7}
              fontWeight={FONT_WEIGHT.BOLD}
            >
              {t('newNFTsDetected')}
            </Typography>
            <Box className="collectibles-detection-notice__message__data">
              <Typography
                color={COLORS.TEXT_DEFAULT}
                align={TEXT_ALIGN.LEFT}
                variant={TYPOGRAPHY.H7}
              >
                {t('newNFTDetectedMessage')}
              </Typography>
              <Box
                display={DISPLAY.INLINE_FLEX}
                flexDirection={FLEX_DIRECTION.ROW}
                className="collectibles-detection-notice__message__fullscreen-links"
              >
                <Button
                  type="link"
                  onClick={() => {
                    history.push(EXPERIMENTAL_ROUTE);
                  }}
                  className="collectibles-detection-notice__message__settings-link"
                >
                  {t('selectNFTPrivacyPreference')}
                </Button>
                <Button
                  type="link"
                  onClick={() => setCollectiblesDetectionNoticeDismissed()}
                  className="collectibles-detection-notice__message__dismiss-link"
                >
                  {t('dismiss')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
