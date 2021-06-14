export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  pathPrefix?: Maybe<Scalars['String']>;
  flags?: Maybe<SiteFlags>;
  polyfill?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteFlags = {
  PRESERVE_WEBPACK_CACHE?: Maybe<Scalars['Boolean']>;
  LMDB_STORE?: Maybe<Scalars['Boolean']>;
  PARALLEL_SOURCING?: Maybe<Scalars['Boolean']>;
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  footer?: Maybe<SiteSiteMetadataFooter>;
  header?: Maybe<SiteSiteMetadataHeader>;
  favicon?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFooter = {
  type?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  has_social?: Maybe<Scalars['Boolean']>;
  social_links?: Maybe<Array<Maybe<SiteSiteMetadataFooterSocial_Links>>>;
  has_nav?: Maybe<Scalars['Boolean']>;
  nav_links?: Maybe<Array<Maybe<SiteSiteMetadataFooterNav_Links>>>;
};

export type SiteSiteMetadataFooterSocial_Links = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFooterNav_Links = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataHeader = {
  type?: Maybe<Scalars['String']>;
  nav_links?: Maybe<Array<Maybe<SiteSiteMetadataHeaderNav_Links>>>;
  has_nav?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  logo_alt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataHeaderNav_Links = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  url?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  relativeDir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  frontmatter?: Maybe<SitePageContextFrontmatter>;
  html?: Maybe<Scalars['String']>;
  pages?: Maybe<Array<Maybe<SitePageContextPages>>>;
  site?: Maybe<SitePageContextSite>;
};

export type SitePageContextFrontmatter = {
  title?: Maybe<Scalars['String']>;
  stackbit_url_path?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  seo?: Maybe<SitePageContextFrontmatterSeo>;
  sections?: Maybe<Array<Maybe<SitePageContextFrontmatterSections>>>;
  excerpt?: Maybe<Scalars['String']>;
  image_alt?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  image?: Maybe<Scalars['String']>;
  author?: Maybe<SitePageContextFrontmatterAuthor>;
  categories?: Maybe<Array<Maybe<SitePageContextFrontmatterCategories>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextFrontmatterSeo = {
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Array<Maybe<SitePageContextFrontmatterSeoExtra>>>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextFrontmatterSeoExtra = {
  relativeUrl?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  keyName?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SitePageContextFrontmatterSections = {
  type?: Maybe<Scalars['String']>;
  image_position?: Maybe<Scalars['String']>;
  has_background?: Maybe<Scalars['Boolean']>;
  align?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  show_recent?: Maybe<Scalars['Boolean']>;
  category?: Maybe<SitePageContextFrontmatterSectionsCategory>;
  subtitle?: Maybe<Scalars['String']>;
  capabilities?: Maybe<Array<Maybe<SitePageContextFrontmatterSectionsCapabilities>>>;
  author?: Maybe<SitePageContextFrontmatterSectionsAuthor>;
};

export type SitePageContextFrontmatterSectionsCategory = {
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextFrontmatterSectionsCapabilities = {
  title?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
  image_position?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePageContextFrontmatterSectionsAuthor = {
  type?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  photo_alt?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextFrontmatterAuthor = {
  type?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  photo_alt?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextFrontmatterCategories = {
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextPages = {
  url?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  relativeDir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  frontmatter?: Maybe<SitePageContextPagesFrontmatter>;
  html?: Maybe<Scalars['String']>;
};

export type SitePageContextPagesFrontmatter = {
  title?: Maybe<Scalars['String']>;
  stackbit_url_path?: Maybe<Scalars['String']>;
  seo?: Maybe<SitePageContextPagesFrontmatterSeo>;
  template?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<SitePageContextPagesFrontmatterSections>>>;
  excerpt?: Maybe<Scalars['String']>;
  image_alt?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  image?: Maybe<Scalars['String']>;
  author?: Maybe<SitePageContextPagesFrontmatterAuthor>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<SitePageContextPagesFrontmatterCategories>>>;
};

export type SitePageContextPagesFrontmatterSeo = {
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Array<Maybe<SitePageContextPagesFrontmatterSeoExtra>>>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextPagesFrontmatterSeoExtra = {
  relativeUrl?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  keyName?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SitePageContextPagesFrontmatterSections = {
  type?: Maybe<Scalars['String']>;
  image_position?: Maybe<Scalars['String']>;
  has_background?: Maybe<Scalars['Boolean']>;
  align?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Maybe<SitePageContextPagesFrontmatterSectionsActions>>>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  team?: Maybe<Array<Maybe<SitePageContextPagesFrontmatterSectionsTeam>>>;
  background_color?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  show_recent?: Maybe<Scalars['Boolean']>;
  capabilities?: Maybe<Array<Maybe<SitePageContextPagesFrontmatterSectionsCapabilities>>>;
  category?: Maybe<SitePageContextPagesFrontmatterSectionsCategory>;
  author?: Maybe<SitePageContextPagesFrontmatterSectionsAuthor>;
};

export type SitePageContextPagesFrontmatterSectionsActions = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePageContextPagesFrontmatterSectionsTeam = {
  type?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  photo_alt?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextPagesFrontmatterSectionsCapabilities = {
  title?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
  image_position?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePageContextPagesFrontmatterSectionsCategory = {
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextPagesFrontmatterSectionsAuthor = {
  type?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  photo_alt?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextPagesFrontmatterAuthor = {
  type?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  photo_alt?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextPagesFrontmatterCategories = {
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextSite = {
  siteMetadata?: Maybe<SitePageContextSiteSiteMetadata>;
  pathPrefix?: Maybe<Scalars['String']>;
};

export type SitePageContextSiteSiteMetadata = {
  footer?: Maybe<SitePageContextSiteSiteMetadataFooter>;
  header?: Maybe<SitePageContextSiteSiteMetadataHeader>;
  favicon?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
};

export type SitePageContextSiteSiteMetadataFooter = {
  type?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  has_social?: Maybe<Scalars['Boolean']>;
  social_links?: Maybe<Array<Maybe<SitePageContextSiteSiteMetadataFooterSocial_Links>>>;
  has_nav?: Maybe<Scalars['Boolean']>;
  nav_links?: Maybe<Array<Maybe<SitePageContextSiteSiteMetadataFooterNav_Links>>>;
};

export type SitePageContextSiteSiteMetadataFooterSocial_Links = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePageContextSiteSiteMetadataFooterNav_Links = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePageContextSiteSiteMetadataHeader = {
  type?: Maybe<Scalars['String']>;
  nav_links?: Maybe<Array<Maybe<SitePageContextSiteSiteMetadataHeaderNav_Links>>>;
  has_nav?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  logo_alt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextSiteSiteMetadataHeaderNav_Links = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};


export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
  stackbit_url_path?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  seo?: Maybe<MarkdownRemarkFrontmatterSeo>;
  excerpt?: Maybe<Scalars['String']>;
  image_alt?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  image?: Maybe<Scalars['String']>;
  author?: Maybe<MarkdownRemarkFrontmatterAuthor>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterCategories>>>;
  sections?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterSections>>>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSeo = {
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterSeoExtra>>>;
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSeoExtra = {
  relativeUrl?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  keyName?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterAuthor = {
  type?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  photo_alt?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterCategories = {
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSections = {
  type?: Maybe<Scalars['String']>;
  image_position?: Maybe<Scalars['String']>;
  has_background?: Maybe<Scalars['Boolean']>;
  align?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterSectionsActions>>>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  team?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterSectionsTeam>>>;
  background_color?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  capabilities?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterSectionsCapabilities>>>;
  author?: Maybe<MarkdownRemarkFrontmatterSectionsAuthor>;
  show_recent?: Maybe<Scalars['Boolean']>;
  category?: Maybe<MarkdownRemarkFrontmatterSectionsCategory>;
};

export type MarkdownRemarkFrontmatterSectionsActions = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSectionsTeam = {
  type?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  photo_alt?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSectionsCapabilities = {
  title?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
  image_position?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSectionsAuthor = {
  type?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  photo_alt?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSectionsCategory = {
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFields = {
  url?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  absoluteDir?: Maybe<Scalars['String']>;
  relativeDir?: Maybe<Scalars['String']>;
  base?: Maybe<File>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  configFile?: Maybe<Scalars['String']>;
  silent?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  linkStyles?: Maybe<Scalars['Boolean']>;
  sourceUrlPath?: Maybe<Scalars['String']>;
  pageContextProperty?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  svgo?: Maybe<Scalars['Boolean']>;
  ref?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPackageJson = {
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  license?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SiteData = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  data?: Maybe<SiteDataData>;
};

export type SiteDataData = {
  site_metadata?: Maybe<SiteDataDataSite_Metadata>;
};

export type SiteDataDataSite_Metadata = {
  footer?: Maybe<SiteDataDataSite_MetadataFooter>;
  header?: Maybe<SiteDataDataSite_MetadataHeader>;
  favicon?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
};

export type SiteDataDataSite_MetadataFooter = {
  type?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  has_social?: Maybe<Scalars['Boolean']>;
  social_links?: Maybe<Array<Maybe<SiteDataDataSite_MetadataFooterSocial_Links>>>;
  has_nav?: Maybe<Scalars['Boolean']>;
  nav_links?: Maybe<Array<Maybe<SiteDataDataSite_MetadataFooterNav_Links>>>;
};

export type SiteDataDataSite_MetadataFooterSocial_Links = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SiteDataDataSite_MetadataFooterNav_Links = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SiteDataDataSite_MetadataHeader = {
  type?: Maybe<Scalars['String']>;
  nav_links?: Maybe<Array<Maybe<SiteDataDataSite_MetadataHeaderNav_Links>>>;
  has_nav?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  logo_alt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteDataDataSite_MetadataHeaderNav_Links = {
  type?: Maybe<Scalars['String']>;
  new_window?: Maybe<Scalars['Boolean']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteData?: Maybe<SiteData>;
  allSiteData: SiteDataConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteDataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  data?: Maybe<SiteDataDataFilterInput>;
};


export type QueryAllSiteDataArgs = {
  filter?: Maybe<SiteDataFilterInput>;
  sort?: Maybe<SiteDataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  stackbit_url_path?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  seo?: Maybe<MarkdownRemarkFrontmatterSeoFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image_alt?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<MarkdownRemarkFrontmatterAuthorFilterInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<MarkdownRemarkFrontmatterCategoriesFilterListInput>;
  sections?: Maybe<MarkdownRemarkFrontmatterSectionsFilterListInput>;
};

export type MarkdownRemarkFrontmatterSeoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  extra?: Maybe<MarkdownRemarkFrontmatterSeoExtraFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSeoExtraFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterSeoExtraFilterInput>;
};

export type MarkdownRemarkFrontmatterSeoExtraFilterInput = {
  relativeUrl?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  keyName?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterAuthorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  last_name?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  photo_alt?: Maybe<StringQueryOperatorInput>;
  first_name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterCategoriesFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterCategoriesFilterInput>;
};

export type MarkdownRemarkFrontmatterCategoriesFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSectionsFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterSectionsFilterInput>;
};

export type MarkdownRemarkFrontmatterSectionsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  image_position?: Maybe<StringQueryOperatorInput>;
  has_background?: Maybe<BooleanQueryOperatorInput>;
  align?: Maybe<StringQueryOperatorInput>;
  actions?: Maybe<MarkdownRemarkFrontmatterSectionsActionsFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  team?: Maybe<MarkdownRemarkFrontmatterSectionsTeamFilterListInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  capabilities?: Maybe<MarkdownRemarkFrontmatterSectionsCapabilitiesFilterListInput>;
  author?: Maybe<MarkdownRemarkFrontmatterSectionsAuthorFilterInput>;
  show_recent?: Maybe<BooleanQueryOperatorInput>;
  category?: Maybe<MarkdownRemarkFrontmatterSectionsCategoryFilterInput>;
};

export type MarkdownRemarkFrontmatterSectionsActionsFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterSectionsActionsFilterInput>;
};

export type MarkdownRemarkFrontmatterSectionsActionsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSectionsTeamFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterSectionsTeamFilterInput>;
};

export type MarkdownRemarkFrontmatterSectionsTeamFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  last_name?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  photo_alt?: Maybe<StringQueryOperatorInput>;
  first_name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSectionsCapabilitiesFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterSectionsCapabilitiesFilterInput>;
};

export type MarkdownRemarkFrontmatterSectionsCapabilitiesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  align?: Maybe<StringQueryOperatorInput>;
  image_position?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSectionsAuthorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  last_name?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  photo_alt?: Maybe<StringQueryOperatorInput>;
  first_name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSectionsCategoryFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFieldsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  absoluteDir?: Maybe<StringQueryOperatorInput>;
  relativeDir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<FileFilterInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___frontmatter___stackbit_url_path'
  | 'childrenMarkdownRemark___frontmatter___template'
  | 'childrenMarkdownRemark___frontmatter___seo___type'
  | 'childrenMarkdownRemark___frontmatter___seo___description'
  | 'childrenMarkdownRemark___frontmatter___seo___extra'
  | 'childrenMarkdownRemark___frontmatter___seo___title'
  | 'childrenMarkdownRemark___frontmatter___excerpt'
  | 'childrenMarkdownRemark___frontmatter___image_alt'
  | 'childrenMarkdownRemark___frontmatter___date'
  | 'childrenMarkdownRemark___frontmatter___image'
  | 'childrenMarkdownRemark___frontmatter___author___type'
  | 'childrenMarkdownRemark___frontmatter___author___bio'
  | 'childrenMarkdownRemark___frontmatter___author___last_name'
  | 'childrenMarkdownRemark___frontmatter___author___photo'
  | 'childrenMarkdownRemark___frontmatter___author___photo_alt'
  | 'childrenMarkdownRemark___frontmatter___author___first_name'
  | 'childrenMarkdownRemark___frontmatter___author___link'
  | 'childrenMarkdownRemark___frontmatter___author___id'
  | 'childrenMarkdownRemark___frontmatter___tags'
  | 'childrenMarkdownRemark___frontmatter___categories'
  | 'childrenMarkdownRemark___frontmatter___categories___link'
  | 'childrenMarkdownRemark___frontmatter___categories___title'
  | 'childrenMarkdownRemark___frontmatter___categories___type'
  | 'childrenMarkdownRemark___frontmatter___categories___id'
  | 'childrenMarkdownRemark___frontmatter___sections'
  | 'childrenMarkdownRemark___frontmatter___sections___type'
  | 'childrenMarkdownRemark___frontmatter___sections___image_position'
  | 'childrenMarkdownRemark___frontmatter___sections___has_background'
  | 'childrenMarkdownRemark___frontmatter___sections___align'
  | 'childrenMarkdownRemark___frontmatter___sections___actions'
  | 'childrenMarkdownRemark___frontmatter___sections___title'
  | 'childrenMarkdownRemark___frontmatter___sections___content'
  | 'childrenMarkdownRemark___frontmatter___sections___team'
  | 'childrenMarkdownRemark___frontmatter___sections___background_color'
  | 'childrenMarkdownRemark___frontmatter___sections___subtitle'
  | 'childrenMarkdownRemark___frontmatter___sections___capabilities'
  | 'childrenMarkdownRemark___frontmatter___sections___show_recent'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenMarkdownRemark___fields___url'
  | 'childrenMarkdownRemark___fields___absolutePath'
  | 'childrenMarkdownRemark___fields___relativePath'
  | 'childrenMarkdownRemark___fields___absoluteDir'
  | 'childrenMarkdownRemark___fields___relativeDir'
  | 'childrenMarkdownRemark___fields___base___sourceInstanceName'
  | 'childrenMarkdownRemark___fields___base___absolutePath'
  | 'childrenMarkdownRemark___fields___base___relativePath'
  | 'childrenMarkdownRemark___fields___base___extension'
  | 'childrenMarkdownRemark___fields___base___size'
  | 'childrenMarkdownRemark___fields___base___prettySize'
  | 'childrenMarkdownRemark___fields___base___modifiedTime'
  | 'childrenMarkdownRemark___fields___base___accessTime'
  | 'childrenMarkdownRemark___fields___base___changeTime'
  | 'childrenMarkdownRemark___fields___base___birthTime'
  | 'childrenMarkdownRemark___fields___base___root'
  | 'childrenMarkdownRemark___fields___base___dir'
  | 'childrenMarkdownRemark___fields___base___base'
  | 'childrenMarkdownRemark___fields___base___ext'
  | 'childrenMarkdownRemark___fields___base___name'
  | 'childrenMarkdownRemark___fields___base___relativeDirectory'
  | 'childrenMarkdownRemark___fields___base___dev'
  | 'childrenMarkdownRemark___fields___base___mode'
  | 'childrenMarkdownRemark___fields___base___nlink'
  | 'childrenMarkdownRemark___fields___base___uid'
  | 'childrenMarkdownRemark___fields___base___gid'
  | 'childrenMarkdownRemark___fields___base___rdev'
  | 'childrenMarkdownRemark___fields___base___ino'
  | 'childrenMarkdownRemark___fields___base___atimeMs'
  | 'childrenMarkdownRemark___fields___base___mtimeMs'
  | 'childrenMarkdownRemark___fields___base___ctimeMs'
  | 'childrenMarkdownRemark___fields___base___atime'
  | 'childrenMarkdownRemark___fields___base___mtime'
  | 'childrenMarkdownRemark___fields___base___ctime'
  | 'childrenMarkdownRemark___fields___base___birthtime'
  | 'childrenMarkdownRemark___fields___base___birthtimeMs'
  | 'childrenMarkdownRemark___fields___base___blksize'
  | 'childrenMarkdownRemark___fields___base___blocks'
  | 'childrenMarkdownRemark___fields___base___publicURL'
  | 'childrenMarkdownRemark___fields___base___childrenImageSharp'
  | 'childrenMarkdownRemark___fields___base___childrenMarkdownRemark'
  | 'childrenMarkdownRemark___fields___base___id'
  | 'childrenMarkdownRemark___fields___base___children'
  | 'childrenMarkdownRemark___fields___ext'
  | 'childrenMarkdownRemark___fields___name'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___stackbit_url_path'
  | 'childMarkdownRemark___frontmatter___template'
  | 'childMarkdownRemark___frontmatter___seo___type'
  | 'childMarkdownRemark___frontmatter___seo___description'
  | 'childMarkdownRemark___frontmatter___seo___extra'
  | 'childMarkdownRemark___frontmatter___seo___title'
  | 'childMarkdownRemark___frontmatter___excerpt'
  | 'childMarkdownRemark___frontmatter___image_alt'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___image'
  | 'childMarkdownRemark___frontmatter___author___type'
  | 'childMarkdownRemark___frontmatter___author___bio'
  | 'childMarkdownRemark___frontmatter___author___last_name'
  | 'childMarkdownRemark___frontmatter___author___photo'
  | 'childMarkdownRemark___frontmatter___author___photo_alt'
  | 'childMarkdownRemark___frontmatter___author___first_name'
  | 'childMarkdownRemark___frontmatter___author___link'
  | 'childMarkdownRemark___frontmatter___author___id'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___categories'
  | 'childMarkdownRemark___frontmatter___categories___link'
  | 'childMarkdownRemark___frontmatter___categories___title'
  | 'childMarkdownRemark___frontmatter___categories___type'
  | 'childMarkdownRemark___frontmatter___categories___id'
  | 'childMarkdownRemark___frontmatter___sections'
  | 'childMarkdownRemark___frontmatter___sections___type'
  | 'childMarkdownRemark___frontmatter___sections___image_position'
  | 'childMarkdownRemark___frontmatter___sections___has_background'
  | 'childMarkdownRemark___frontmatter___sections___align'
  | 'childMarkdownRemark___frontmatter___sections___actions'
  | 'childMarkdownRemark___frontmatter___sections___title'
  | 'childMarkdownRemark___frontmatter___sections___content'
  | 'childMarkdownRemark___frontmatter___sections___team'
  | 'childMarkdownRemark___frontmatter___sections___background_color'
  | 'childMarkdownRemark___frontmatter___sections___subtitle'
  | 'childMarkdownRemark___frontmatter___sections___capabilities'
  | 'childMarkdownRemark___frontmatter___sections___show_recent'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___url'
  | 'childMarkdownRemark___fields___absolutePath'
  | 'childMarkdownRemark___fields___relativePath'
  | 'childMarkdownRemark___fields___absoluteDir'
  | 'childMarkdownRemark___fields___relativeDir'
  | 'childMarkdownRemark___fields___base___sourceInstanceName'
  | 'childMarkdownRemark___fields___base___absolutePath'
  | 'childMarkdownRemark___fields___base___relativePath'
  | 'childMarkdownRemark___fields___base___extension'
  | 'childMarkdownRemark___fields___base___size'
  | 'childMarkdownRemark___fields___base___prettySize'
  | 'childMarkdownRemark___fields___base___modifiedTime'
  | 'childMarkdownRemark___fields___base___accessTime'
  | 'childMarkdownRemark___fields___base___changeTime'
  | 'childMarkdownRemark___fields___base___birthTime'
  | 'childMarkdownRemark___fields___base___root'
  | 'childMarkdownRemark___fields___base___dir'
  | 'childMarkdownRemark___fields___base___base'
  | 'childMarkdownRemark___fields___base___ext'
  | 'childMarkdownRemark___fields___base___name'
  | 'childMarkdownRemark___fields___base___relativeDirectory'
  | 'childMarkdownRemark___fields___base___dev'
  | 'childMarkdownRemark___fields___base___mode'
  | 'childMarkdownRemark___fields___base___nlink'
  | 'childMarkdownRemark___fields___base___uid'
  | 'childMarkdownRemark___fields___base___gid'
  | 'childMarkdownRemark___fields___base___rdev'
  | 'childMarkdownRemark___fields___base___ino'
  | 'childMarkdownRemark___fields___base___atimeMs'
  | 'childMarkdownRemark___fields___base___mtimeMs'
  | 'childMarkdownRemark___fields___base___ctimeMs'
  | 'childMarkdownRemark___fields___base___atime'
  | 'childMarkdownRemark___fields___base___mtime'
  | 'childMarkdownRemark___fields___base___ctime'
  | 'childMarkdownRemark___fields___base___birthtime'
  | 'childMarkdownRemark___fields___base___birthtimeMs'
  | 'childMarkdownRemark___fields___base___blksize'
  | 'childMarkdownRemark___fields___base___blocks'
  | 'childMarkdownRemark___fields___base___publicURL'
  | 'childMarkdownRemark___fields___base___childrenImageSharp'
  | 'childMarkdownRemark___fields___base___childrenMarkdownRemark'
  | 'childMarkdownRemark___fields___base___id'
  | 'childMarkdownRemark___fields___base___children'
  | 'childMarkdownRemark___fields___ext'
  | 'childMarkdownRemark___fields___name'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  footer?: Maybe<SiteSiteMetadataFooterFilterInput>;
  header?: Maybe<SiteSiteMetadataHeaderFilterInput>;
  favicon?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFooterFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  has_social?: Maybe<BooleanQueryOperatorInput>;
  social_links?: Maybe<SiteSiteMetadataFooterSocial_LinksFilterListInput>;
  has_nav?: Maybe<BooleanQueryOperatorInput>;
  nav_links?: Maybe<SiteSiteMetadataFooterNav_LinksFilterListInput>;
};

export type SiteSiteMetadataFooterSocial_LinksFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataFooterSocial_LinksFilterInput>;
};

export type SiteSiteMetadataFooterSocial_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFooterNav_LinksFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataFooterNav_LinksFilterInput>;
};

export type SiteSiteMetadataFooterNav_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataHeaderFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  nav_links?: Maybe<SiteSiteMetadataHeaderNav_LinksFilterListInput>;
  has_nav?: Maybe<BooleanQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  logo_alt?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataHeaderNav_LinksFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataHeaderNav_LinksFilterInput>;
};

export type SiteSiteMetadataHeaderNav_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SiteFlagsFilterInput = {
  PRESERVE_WEBPACK_CACHE?: Maybe<BooleanQueryOperatorInput>;
  LMDB_STORE?: Maybe<BooleanQueryOperatorInput>;
  PARALLEL_SOURCING?: Maybe<BooleanQueryOperatorInput>;
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___footer___type'
  | 'siteMetadata___footer___content'
  | 'siteMetadata___footer___has_social'
  | 'siteMetadata___footer___social_links'
  | 'siteMetadata___footer___social_links___type'
  | 'siteMetadata___footer___social_links___new_window'
  | 'siteMetadata___footer___social_links___no_follow'
  | 'siteMetadata___footer___social_links___style'
  | 'siteMetadata___footer___social_links___url'
  | 'siteMetadata___footer___social_links___label'
  | 'siteMetadata___footer___has_nav'
  | 'siteMetadata___footer___nav_links'
  | 'siteMetadata___footer___nav_links___type'
  | 'siteMetadata___footer___nav_links___new_window'
  | 'siteMetadata___footer___nav_links___no_follow'
  | 'siteMetadata___footer___nav_links___style'
  | 'siteMetadata___footer___nav_links___url'
  | 'siteMetadata___footer___nav_links___label'
  | 'siteMetadata___header___type'
  | 'siteMetadata___header___nav_links'
  | 'siteMetadata___header___nav_links___type'
  | 'siteMetadata___header___nav_links___new_window'
  | 'siteMetadata___header___nav_links___no_follow'
  | 'siteMetadata___header___nav_links___style'
  | 'siteMetadata___header___nav_links___url'
  | 'siteMetadata___header___nav_links___label'
  | 'siteMetadata___header___has_nav'
  | 'siteMetadata___header___logo'
  | 'siteMetadata___header___logo_alt'
  | 'siteMetadata___header___title'
  | 'siteMetadata___favicon'
  | 'siteMetadata___domain'
  | 'pathPrefix'
  | 'flags___PRESERVE_WEBPACK_CACHE'
  | 'flags___LMDB_STORE'
  | 'flags___PARALLEL_SOURCING'
  | 'flags___PRESERVE_FILE_DOWNLOAD_CACHE'
  | 'polyfill'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageContextFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  relativeDir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<SitePageContextPagesFilterListInput>;
  site?: Maybe<SitePageContextSiteFilterInput>;
};

export type SitePageContextFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  stackbit_url_path?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  seo?: Maybe<SitePageContextFrontmatterSeoFilterInput>;
  sections?: Maybe<SitePageContextFrontmatterSectionsFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image_alt?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<SitePageContextFrontmatterAuthorFilterInput>;
  categories?: Maybe<SitePageContextFrontmatterCategoriesFilterListInput>;
  tags?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFrontmatterSeoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  extra?: Maybe<SitePageContextFrontmatterSeoExtraFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFrontmatterSeoExtraFilterListInput = {
  elemMatch?: Maybe<SitePageContextFrontmatterSeoExtraFilterInput>;
};

export type SitePageContextFrontmatterSeoExtraFilterInput = {
  relativeUrl?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  keyName?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFrontmatterSectionsFilterListInput = {
  elemMatch?: Maybe<SitePageContextFrontmatterSectionsFilterInput>;
};

export type SitePageContextFrontmatterSectionsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  image_position?: Maybe<StringQueryOperatorInput>;
  has_background?: Maybe<BooleanQueryOperatorInput>;
  align?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  show_recent?: Maybe<BooleanQueryOperatorInput>;
  category?: Maybe<SitePageContextFrontmatterSectionsCategoryFilterInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  capabilities?: Maybe<SitePageContextFrontmatterSectionsCapabilitiesFilterListInput>;
  author?: Maybe<SitePageContextFrontmatterSectionsAuthorFilterInput>;
};

export type SitePageContextFrontmatterSectionsCategoryFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFrontmatterSectionsCapabilitiesFilterListInput = {
  elemMatch?: Maybe<SitePageContextFrontmatterSectionsCapabilitiesFilterInput>;
};

export type SitePageContextFrontmatterSectionsCapabilitiesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  align?: Maybe<StringQueryOperatorInput>;
  image_position?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFrontmatterSectionsAuthorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  last_name?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  photo_alt?: Maybe<StringQueryOperatorInput>;
  first_name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFrontmatterAuthorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  last_name?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  photo_alt?: Maybe<StringQueryOperatorInput>;
  first_name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFrontmatterCategoriesFilterListInput = {
  elemMatch?: Maybe<SitePageContextFrontmatterCategoriesFilterInput>;
};

export type SitePageContextFrontmatterCategoriesFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagesFilterListInput = {
  elemMatch?: Maybe<SitePageContextPagesFilterInput>;
};

export type SitePageContextPagesFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  relativeDir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<SitePageContextPagesFrontmatterFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagesFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  stackbit_url_path?: Maybe<StringQueryOperatorInput>;
  seo?: Maybe<SitePageContextPagesFrontmatterSeoFilterInput>;
  template?: Maybe<StringQueryOperatorInput>;
  sections?: Maybe<SitePageContextPagesFrontmatterSectionsFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image_alt?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<SitePageContextPagesFrontmatterAuthorFilterInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<SitePageContextPagesFrontmatterCategoriesFilterListInput>;
};

export type SitePageContextPagesFrontmatterSeoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  extra?: Maybe<SitePageContextPagesFrontmatterSeoExtraFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagesFrontmatterSeoExtraFilterListInput = {
  elemMatch?: Maybe<SitePageContextPagesFrontmatterSeoExtraFilterInput>;
};

export type SitePageContextPagesFrontmatterSeoExtraFilterInput = {
  relativeUrl?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  keyName?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagesFrontmatterSectionsFilterListInput = {
  elemMatch?: Maybe<SitePageContextPagesFrontmatterSectionsFilterInput>;
};

export type SitePageContextPagesFrontmatterSectionsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  image_position?: Maybe<StringQueryOperatorInput>;
  has_background?: Maybe<BooleanQueryOperatorInput>;
  align?: Maybe<StringQueryOperatorInput>;
  actions?: Maybe<SitePageContextPagesFrontmatterSectionsActionsFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  team?: Maybe<SitePageContextPagesFrontmatterSectionsTeamFilterListInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  show_recent?: Maybe<BooleanQueryOperatorInput>;
  capabilities?: Maybe<SitePageContextPagesFrontmatterSectionsCapabilitiesFilterListInput>;
  category?: Maybe<SitePageContextPagesFrontmatterSectionsCategoryFilterInput>;
  author?: Maybe<SitePageContextPagesFrontmatterSectionsAuthorFilterInput>;
};

export type SitePageContextPagesFrontmatterSectionsActionsFilterListInput = {
  elemMatch?: Maybe<SitePageContextPagesFrontmatterSectionsActionsFilterInput>;
};

export type SitePageContextPagesFrontmatterSectionsActionsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagesFrontmatterSectionsTeamFilterListInput = {
  elemMatch?: Maybe<SitePageContextPagesFrontmatterSectionsTeamFilterInput>;
};

export type SitePageContextPagesFrontmatterSectionsTeamFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  last_name?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  photo_alt?: Maybe<StringQueryOperatorInput>;
  first_name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagesFrontmatterSectionsCapabilitiesFilterListInput = {
  elemMatch?: Maybe<SitePageContextPagesFrontmatterSectionsCapabilitiesFilterInput>;
};

export type SitePageContextPagesFrontmatterSectionsCapabilitiesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  align?: Maybe<StringQueryOperatorInput>;
  image_position?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagesFrontmatterSectionsCategoryFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagesFrontmatterSectionsAuthorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  last_name?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  photo_alt?: Maybe<StringQueryOperatorInput>;
  first_name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagesFrontmatterAuthorFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  last_name?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  photo_alt?: Maybe<StringQueryOperatorInput>;
  first_name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPagesFrontmatterCategoriesFilterListInput = {
  elemMatch?: Maybe<SitePageContextPagesFrontmatterCategoriesFilterInput>;
};

export type SitePageContextPagesFrontmatterCategoriesFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSiteFilterInput = {
  siteMetadata?: Maybe<SitePageContextSiteSiteMetadataFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSiteSiteMetadataFilterInput = {
  footer?: Maybe<SitePageContextSiteSiteMetadataFooterFilterInput>;
  header?: Maybe<SitePageContextSiteSiteMetadataHeaderFilterInput>;
  favicon?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSiteSiteMetadataFooterFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  has_social?: Maybe<BooleanQueryOperatorInput>;
  social_links?: Maybe<SitePageContextSiteSiteMetadataFooterSocial_LinksFilterListInput>;
  has_nav?: Maybe<BooleanQueryOperatorInput>;
  nav_links?: Maybe<SitePageContextSiteSiteMetadataFooterNav_LinksFilterListInput>;
};

export type SitePageContextSiteSiteMetadataFooterSocial_LinksFilterListInput = {
  elemMatch?: Maybe<SitePageContextSiteSiteMetadataFooterSocial_LinksFilterInput>;
};

export type SitePageContextSiteSiteMetadataFooterSocial_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSiteSiteMetadataFooterNav_LinksFilterListInput = {
  elemMatch?: Maybe<SitePageContextSiteSiteMetadataFooterNav_LinksFilterInput>;
};

export type SitePageContextSiteSiteMetadataFooterNav_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSiteSiteMetadataHeaderFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  nav_links?: Maybe<SitePageContextSiteSiteMetadataHeaderNav_LinksFilterListInput>;
  has_nav?: Maybe<BooleanQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  logo_alt?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSiteSiteMetadataHeaderNav_LinksFilterListInput = {
  elemMatch?: Maybe<SitePageContextSiteSiteMetadataHeaderNav_LinksFilterInput>;
};

export type SitePageContextSiteSiteMetadataHeaderNav_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  configFile?: Maybe<StringQueryOperatorInput>;
  silent?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  linkStyles?: Maybe<BooleanQueryOperatorInput>;
  sourceUrlPath?: Maybe<StringQueryOperatorInput>;
  pageContextProperty?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  svgo?: Maybe<BooleanQueryOperatorInput>;
  ref?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___url'
  | 'context___relativePath'
  | 'context___relativeDir'
  | 'context___base'
  | 'context___name'
  | 'context___frontmatter___title'
  | 'context___frontmatter___stackbit_url_path'
  | 'context___frontmatter___template'
  | 'context___frontmatter___seo___type'
  | 'context___frontmatter___seo___description'
  | 'context___frontmatter___seo___extra'
  | 'context___frontmatter___seo___title'
  | 'context___frontmatter___sections'
  | 'context___frontmatter___sections___type'
  | 'context___frontmatter___sections___image_position'
  | 'context___frontmatter___sections___has_background'
  | 'context___frontmatter___sections___align'
  | 'context___frontmatter___sections___title'
  | 'context___frontmatter___sections___show_recent'
  | 'context___frontmatter___sections___subtitle'
  | 'context___frontmatter___sections___capabilities'
  | 'context___frontmatter___excerpt'
  | 'context___frontmatter___image_alt'
  | 'context___frontmatter___date'
  | 'context___frontmatter___image'
  | 'context___frontmatter___author___type'
  | 'context___frontmatter___author___bio'
  | 'context___frontmatter___author___last_name'
  | 'context___frontmatter___author___photo'
  | 'context___frontmatter___author___photo_alt'
  | 'context___frontmatter___author___first_name'
  | 'context___frontmatter___author___link'
  | 'context___frontmatter___author___id'
  | 'context___frontmatter___categories'
  | 'context___frontmatter___categories___link'
  | 'context___frontmatter___categories___title'
  | 'context___frontmatter___categories___type'
  | 'context___frontmatter___categories___id'
  | 'context___frontmatter___tags'
  | 'context___html'
  | 'context___pages'
  | 'context___pages___url'
  | 'context___pages___relativePath'
  | 'context___pages___relativeDir'
  | 'context___pages___base'
  | 'context___pages___name'
  | 'context___pages___frontmatter___title'
  | 'context___pages___frontmatter___stackbit_url_path'
  | 'context___pages___frontmatter___template'
  | 'context___pages___frontmatter___sections'
  | 'context___pages___frontmatter___excerpt'
  | 'context___pages___frontmatter___image_alt'
  | 'context___pages___frontmatter___date'
  | 'context___pages___frontmatter___image'
  | 'context___pages___frontmatter___tags'
  | 'context___pages___frontmatter___categories'
  | 'context___pages___html'
  | 'context___site___siteMetadata___favicon'
  | 'context___site___siteMetadata___title'
  | 'context___site___siteMetadata___domain'
  | 'context___site___pathPrefix'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___configFile'
  | 'pluginCreator___pluginOptions___silent'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___linkStyles'
  | 'pluginCreator___pluginOptions___sourceUrlPath'
  | 'pluginCreator___pluginOptions___pageContextProperty'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___svgo'
  | 'pluginCreator___pluginOptions___ref'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreatorId';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___stackbit_url_path'
  | 'frontmatter___template'
  | 'frontmatter___seo___type'
  | 'frontmatter___seo___description'
  | 'frontmatter___seo___extra'
  | 'frontmatter___seo___extra___relativeUrl'
  | 'frontmatter___seo___extra___type'
  | 'frontmatter___seo___extra___name'
  | 'frontmatter___seo___extra___keyName'
  | 'frontmatter___seo___extra___value'
  | 'frontmatter___seo___title'
  | 'frontmatter___excerpt'
  | 'frontmatter___image_alt'
  | 'frontmatter___date'
  | 'frontmatter___image'
  | 'frontmatter___author___type'
  | 'frontmatter___author___bio'
  | 'frontmatter___author___last_name'
  | 'frontmatter___author___photo'
  | 'frontmatter___author___photo_alt'
  | 'frontmatter___author___first_name'
  | 'frontmatter___author___link'
  | 'frontmatter___author___id'
  | 'frontmatter___tags'
  | 'frontmatter___categories'
  | 'frontmatter___categories___link'
  | 'frontmatter___categories___title'
  | 'frontmatter___categories___type'
  | 'frontmatter___categories___id'
  | 'frontmatter___sections'
  | 'frontmatter___sections___type'
  | 'frontmatter___sections___image_position'
  | 'frontmatter___sections___has_background'
  | 'frontmatter___sections___align'
  | 'frontmatter___sections___actions'
  | 'frontmatter___sections___actions___type'
  | 'frontmatter___sections___actions___new_window'
  | 'frontmatter___sections___actions___no_follow'
  | 'frontmatter___sections___actions___style'
  | 'frontmatter___sections___actions___url'
  | 'frontmatter___sections___actions___label'
  | 'frontmatter___sections___title'
  | 'frontmatter___sections___content'
  | 'frontmatter___sections___team'
  | 'frontmatter___sections___team___type'
  | 'frontmatter___sections___team___bio'
  | 'frontmatter___sections___team___last_name'
  | 'frontmatter___sections___team___photo'
  | 'frontmatter___sections___team___photo_alt'
  | 'frontmatter___sections___team___first_name'
  | 'frontmatter___sections___team___link'
  | 'frontmatter___sections___team___id'
  | 'frontmatter___sections___background_color'
  | 'frontmatter___sections___subtitle'
  | 'frontmatter___sections___capabilities'
  | 'frontmatter___sections___capabilities___title'
  | 'frontmatter___sections___capabilities___align'
  | 'frontmatter___sections___capabilities___image_position'
  | 'frontmatter___sections___capabilities___type'
  | 'frontmatter___sections___author___type'
  | 'frontmatter___sections___author___bio'
  | 'frontmatter___sections___author___last_name'
  | 'frontmatter___sections___author___photo'
  | 'frontmatter___sections___author___photo_alt'
  | 'frontmatter___sections___author___first_name'
  | 'frontmatter___sections___author___link'
  | 'frontmatter___sections___author___id'
  | 'frontmatter___sections___show_recent'
  | 'frontmatter___sections___category___link'
  | 'frontmatter___sections___category___title'
  | 'frontmatter___sections___category___type'
  | 'frontmatter___sections___category___id'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields___url'
  | 'fields___absolutePath'
  | 'fields___relativePath'
  | 'fields___absoluteDir'
  | 'fields___relativeDir'
  | 'fields___base___sourceInstanceName'
  | 'fields___base___absolutePath'
  | 'fields___base___relativePath'
  | 'fields___base___extension'
  | 'fields___base___size'
  | 'fields___base___prettySize'
  | 'fields___base___modifiedTime'
  | 'fields___base___accessTime'
  | 'fields___base___changeTime'
  | 'fields___base___birthTime'
  | 'fields___base___root'
  | 'fields___base___dir'
  | 'fields___base___base'
  | 'fields___base___ext'
  | 'fields___base___name'
  | 'fields___base___relativeDirectory'
  | 'fields___base___dev'
  | 'fields___base___mode'
  | 'fields___base___nlink'
  | 'fields___base___uid'
  | 'fields___base___gid'
  | 'fields___base___rdev'
  | 'fields___base___ino'
  | 'fields___base___atimeMs'
  | 'fields___base___mtimeMs'
  | 'fields___base___ctimeMs'
  | 'fields___base___atime'
  | 'fields___base___mtime'
  | 'fields___base___ctime'
  | 'fields___base___birthtime'
  | 'fields___base___birthtimeMs'
  | 'fields___base___blksize'
  | 'fields___base___blocks'
  | 'fields___base___publicURL'
  | 'fields___base___childrenImageSharp'
  | 'fields___base___childrenImageSharp___gatsbyImageData'
  | 'fields___base___childrenImageSharp___id'
  | 'fields___base___childrenImageSharp___children'
  | 'fields___base___childImageSharp___gatsbyImageData'
  | 'fields___base___childImageSharp___id'
  | 'fields___base___childImageSharp___children'
  | 'fields___base___childrenMarkdownRemark'
  | 'fields___base___childrenMarkdownRemark___id'
  | 'fields___base___childrenMarkdownRemark___excerpt'
  | 'fields___base___childrenMarkdownRemark___rawMarkdownBody'
  | 'fields___base___childrenMarkdownRemark___fileAbsolutePath'
  | 'fields___base___childrenMarkdownRemark___html'
  | 'fields___base___childrenMarkdownRemark___htmlAst'
  | 'fields___base___childrenMarkdownRemark___excerptAst'
  | 'fields___base___childrenMarkdownRemark___headings'
  | 'fields___base___childrenMarkdownRemark___timeToRead'
  | 'fields___base___childrenMarkdownRemark___tableOfContents'
  | 'fields___base___childrenMarkdownRemark___children'
  | 'fields___base___childMarkdownRemark___id'
  | 'fields___base___childMarkdownRemark___excerpt'
  | 'fields___base___childMarkdownRemark___rawMarkdownBody'
  | 'fields___base___childMarkdownRemark___fileAbsolutePath'
  | 'fields___base___childMarkdownRemark___html'
  | 'fields___base___childMarkdownRemark___htmlAst'
  | 'fields___base___childMarkdownRemark___excerptAst'
  | 'fields___base___childMarkdownRemark___headings'
  | 'fields___base___childMarkdownRemark___timeToRead'
  | 'fields___base___childMarkdownRemark___tableOfContents'
  | 'fields___base___childMarkdownRemark___children'
  | 'fields___base___id'
  | 'fields___base___parent___id'
  | 'fields___base___parent___children'
  | 'fields___base___children'
  | 'fields___base___children___id'
  | 'fields___base___children___children'
  | 'fields___base___internal___content'
  | 'fields___base___internal___contentDigest'
  | 'fields___base___internal___description'
  | 'fields___base___internal___fieldOwners'
  | 'fields___base___internal___ignoreType'
  | 'fields___base___internal___mediaType'
  | 'fields___base___internal___owner'
  | 'fields___base___internal___type'
  | 'fields___ext'
  | 'fields___name'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___configFile'
  | 'pluginOptions___silent'
  | 'pluginOptions___name'
  | 'pluginOptions___linkStyles'
  | 'pluginOptions___sourceUrlPath'
  | 'pluginOptions___pageContextProperty'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___svgo'
  | 'pluginOptions___ref'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___keywords'
  | 'packageJson___license';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteDataDataFilterInput = {
  site_metadata?: Maybe<SiteDataDataSite_MetadataFilterInput>;
};

export type SiteDataDataSite_MetadataFilterInput = {
  footer?: Maybe<SiteDataDataSite_MetadataFooterFilterInput>;
  header?: Maybe<SiteDataDataSite_MetadataHeaderFilterInput>;
  favicon?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
};

export type SiteDataDataSite_MetadataFooterFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  has_social?: Maybe<BooleanQueryOperatorInput>;
  social_links?: Maybe<SiteDataDataSite_MetadataFooterSocial_LinksFilterListInput>;
  has_nav?: Maybe<BooleanQueryOperatorInput>;
  nav_links?: Maybe<SiteDataDataSite_MetadataFooterNav_LinksFilterListInput>;
};

export type SiteDataDataSite_MetadataFooterSocial_LinksFilterListInput = {
  elemMatch?: Maybe<SiteDataDataSite_MetadataFooterSocial_LinksFilterInput>;
};

export type SiteDataDataSite_MetadataFooterSocial_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SiteDataDataSite_MetadataFooterNav_LinksFilterListInput = {
  elemMatch?: Maybe<SiteDataDataSite_MetadataFooterNav_LinksFilterInput>;
};

export type SiteDataDataSite_MetadataFooterNav_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SiteDataDataSite_MetadataHeaderFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  nav_links?: Maybe<SiteDataDataSite_MetadataHeaderNav_LinksFilterListInput>;
  has_nav?: Maybe<BooleanQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  logo_alt?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteDataDataSite_MetadataHeaderNav_LinksFilterListInput = {
  elemMatch?: Maybe<SiteDataDataSite_MetadataHeaderNav_LinksFilterInput>;
};

export type SiteDataDataSite_MetadataHeaderNav_LinksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  new_window?: Maybe<BooleanQueryOperatorInput>;
  no_follow?: Maybe<BooleanQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SiteDataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteDataEdge>;
  nodes: Array<SiteData>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteDataGroupConnection>;
};


export type SiteDataConnectionDistinctArgs = {
  field: SiteDataFieldsEnum;
};


export type SiteDataConnectionMaxArgs = {
  field: SiteDataFieldsEnum;
};


export type SiteDataConnectionMinArgs = {
  field: SiteDataFieldsEnum;
};


export type SiteDataConnectionSumArgs = {
  field: SiteDataFieldsEnum;
};


export type SiteDataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteDataFieldsEnum;
};

export type SiteDataEdge = {
  next?: Maybe<SiteData>;
  node: SiteData;
  previous?: Maybe<SiteData>;
};

export type SiteDataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'data___site_metadata___footer___type'
  | 'data___site_metadata___footer___content'
  | 'data___site_metadata___footer___has_social'
  | 'data___site_metadata___footer___social_links'
  | 'data___site_metadata___footer___has_nav'
  | 'data___site_metadata___footer___nav_links'
  | 'data___site_metadata___header___type'
  | 'data___site_metadata___header___nav_links'
  | 'data___site_metadata___header___has_nav'
  | 'data___site_metadata___header___logo'
  | 'data___site_metadata___header___logo_alt'
  | 'data___site_metadata___header___title'
  | 'data___site_metadata___favicon'
  | 'data___site_metadata___title'
  | 'data___site_metadata___domain';

export type SiteDataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteDataEdge>;
  nodes: Array<SiteData>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteDataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  data?: Maybe<SiteDataDataFilterInput>;
};

export type SiteDataSortInput = {
  fields?: Maybe<Array<Maybe<SiteDataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{
  url?: Maybe<Scalars['String']>;
}>;


export type Unnamed_1_Query = { sitePage?: Maybe<Pick<SitePage, 'id'>> };

export type Unnamed_2_QueryVariables = Exact<{
  url?: Maybe<Scalars['String']>;
}>;


export type Unnamed_2_Query = { sitePage?: Maybe<Pick<SitePage, 'id'>> };

export type Unnamed_3_QueryVariables = Exact<{
  url?: Maybe<Scalars['String']>;
}>;


export type Unnamed_3_Query = { sitePage?: Maybe<Pick<SitePage, 'id'>> };
