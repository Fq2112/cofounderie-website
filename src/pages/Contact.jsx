import React, { useEffect } from 'react'
import { titleScroller } from '../utils/utils';
import { t } from 'i18next';

export default function Contact() {
  useEffect(() => titleScroller(t("header.nav.contact")), []);

  return (
    <div className="flex w-full h-screen bg-black text-white">
      {t("header.nav.contact")}
    </div>
  );
}
