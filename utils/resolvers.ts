export const globalsResolver = (globals: any) => ({
  defaultMeta: {
    favicon: globals?.favicon?.url,
    metaTitle: globals?.meta_title,
    metaDescription: globals?.meta_description,
    metaImage: globals?.meta_image?.url,
  },
  logo: {
    name: globals?.name,
    role: globals?.job_title,
  },
  background: {
    video: globals?.video?.url,
    poster: globals?.poster?.url,
  },
  nav: {
    email: globals?.email?.url,
    resume: globals?.resume?.url,
    items: navResolver(globals?.nav),
  },
});

export const navResolver = (nav: any) => {
  if (!nav) return undefined;
  return nav.map((item: any) => ({
    url: `/${item?.link?.uid}`,
    title: item.title,
  }));
};

export const pageResolver = (page: any) => ({
  meta: {
    metaTitle: page?.meta_title,
    metaDescription: page?.meta_description,
  },
  slices: page?.body,
});

export const projectsResolver = (projects: any) => {
  return projects.map((project: any) => ({
    image: project.data?.image?.url,
    url: project.data?.link,
    name: project.data?.name,
    role: project.data?.role,
    date: project.data?.date,
  }));
};
