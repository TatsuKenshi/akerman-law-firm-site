type usePageTitleProps = {
  language: string;
  srTitle: string;
  enTitle: string;
};

const usePageTitle = () => {
  const changeTitle = ({
    language,
    srTitle,
    enTitle,
  }: usePageTitleProps): string => {
    let title = "";

    if (language === "en") {
      title = enTitle;
    } else {
      title = srTitle;
    }

    return (document.title = `Akerman | ${title}`);
  };
  return { changeTitle };
};

export default usePageTitle;
