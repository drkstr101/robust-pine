/** @format */

import React, { useState } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MenuIcon from "@material-ui/icons/Menu"
import { Image, DarkModeToggler } from "@waweb/atoms"
import { Link } from "@waweb/utils"
import { sitemap } from "@waweb/ctx.data"

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    background: "transparent",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: "pointer",
    "&:hover > .menu-item, &:hover svg": {
      color: theme.palette.primary.dark,
    },
    "&.menu-item--no-dropdown": {
      paddingRight: 0,
    },
  },
  listItemActive: {
    "&> .menu-item": {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: "0 0 auto",
    marginRight: theme.spacing(2),
    whiteSpace: "nowrap",
  },
  listItemButton: {
    whiteSpace: "nowrap",
  },
  listItemIcon: {
    minWidth: "auto",
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: "0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)",
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    marginRight: theme.spacing(5),
    "&:last-child": {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: "uppercase",
  },
}))

interface Props {
  className?: string
  onSidebarOpen: Function
  pages: PagesProps
  themeMode: string
  themeToggler: Function
}

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState<any>(null)
  const [openedPopoverId, setOpenedPopoverId] = useState<string | null>(null)

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    popoverId: string | null
  ): void => {
    setAnchorEl(event.target)
    setOpenedPopoverId(popoverId)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
    setOpenedPopoverId(null)
  }

  // const landings = pages.landings
  // const supportedPages = pages.pages
  // const account = pages.account

  // const MenuGroup = ({ item }: MenuGroupProps): JSX.Element => (
  //   <List disablePadding>
  //     <ListItem disableGutters>
  //       <Typography variant="body2" color="primary" className={classes.menuGroupTitle}>
  //         {item.groupTitle}
  //       </Typography>
  //     </ListItem>
  //     {item.pages.map((page, i) => (
  //       <ListItem disableGutters key={i} className={classes.menuGroupItem}>
  //         <Typography
  //           variant="body1"
  //           component={"a"}
  //           href={page.href}
  //           className={clsx(classes.navLink, "submenu-item")}
  //           color="textSecondary"
  //           onClick={handleClose}
  //         >
  //           {page.title}
  //         </Typography>
  //       </ListItem>
  //     ))}
  //   </List>
  // )

  // const LandingPages = (): JSX.Element => {
  //   const { services, integrations, web } = landings.children
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={services} />
  //         <MenuGroup item={integrations} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={web} />
  //       </div>
  //     </div>
  //   )
  // }

  // const SupportedPages = (): JSX.Element => {
  //   const { career, help, company, contact, blog, portfolio } = supportedPages.children
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={career} />
  //         <MenuGroup item={help} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={company} />
  //         <MenuGroup item={contact} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={blog} />
  //         <MenuGroup item={portfolio} />
  //       </div>
  //     </div>
  //   )
  // }

  // const AccountPages = (): JSX.Element => {
  //   const { settings, signup, signin, password, error } = account.children
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={settings} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={signup} />
  //         <MenuGroup item={signin} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={password} />
  //         <MenuGroup item={error} />
  //       </div>
  //     </div>
  //   )
  // }

  // const renderPages = (id: string): JSX.Element | null => {
  //   if (id === "home") {
  //     return <LandingPages />
  //   }
  //   if (id === "blog") {
  //     return <SupportedPages />
  //   }
  //   if (id === "account") {
  //     return <AccountPages />
  //   }
  //   return null
  // }

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <Link to="/">
          <Image
            className={classes.logoImage}
            src={
              themeMode === "light"
                ? "https://cdn.watheia.org/assets/logo-banner.svg"
                : "https://cdn.watheia.org/assets/logo-banner-alt.svg"
            }
            alt="Home"
            lazy={false}
          />
        </Link>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <DarkModeToggler
              themeMode={themeMode}
              onClick={() => themeToggler()}
            />
          </ListItem>
          {/* <ListItem
            className={clsx(classes.listItem, 'menu-item--no-dropdown')}
          >
            <Button variant="outlined" component="a" href="/documentation">
              Microlab
            </Button>
          </ListItem> */}
          <ListItem
            className={clsx(classes.listItem, "menu-item--no-dropdown")}
          >
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://watheia.app/support/"
              className={classes.listItemButton}
            >
              Get Support
            </Button>
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        <IconButton
          className={classes.iconButton}
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  )
}

export default Topbar
