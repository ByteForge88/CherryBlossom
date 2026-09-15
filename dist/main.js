const plugin = {"$schema":"https://acode.app/schema/plugin/v0.1.0.json","id":"com.byteforge88.cherryblossom.theme","name":"CherryBlossom","main":"main.js","version":"1.0.0","readme":"readme.md","changelogs":"changelog.md","repository":"https://github.com/ByteForge88/CherryBlossom-Theme","icon":"icon.png","files":[],"minVersionCode":290,"license":"MIT","keywords":["theme","cherry blossom","sakura pink","petal cream","warm bark","semi dark","editor","codemirror","syntax highlighting"],"price":0,"permissions":[],"author":{"name":"ByteForge88","github":"ByteForge88","url":"https://github.com/ByteForge88/"},"description":"Vibrant sakura-pink, petal-cream, and warm-bark semi-dark app + editor theme for Acode with comprehensive syntax highlighting."};

const EDITOR_THEME_ID = "cherryblossom";
const APP_THEME_NAME = "CherryBlossom";

const COLORS = Object.freeze({
  editorBg: "#21181D",
  gutterBg: "#2A1E24",
  appBg: "#261B21",
  panel: "#33242B",
  panelRaised: "#402D35",

  pink: "#F29BB2",
  pinkSoft: "#F7B9C8",
  pinkDeep: "#D76F8D",
  rose: "#E687A0",

  tan: "#D1AE86",
  tanLight: "#E7CBA6",
  tanDeep: "#B88D66",
  peach: "#EAB59F",
  caramel: "#D7A46F",
  cream: "#F6E5DF",

  text: "#F9ECE8",
  muted: "#AA918B",
  punctuation: "#C9AAA7",
  error: "#E77C7C",
  inserted: "#D8B887",
  deleted: "#D97F8F",
});

class CherryBlossomThemePlugin {
  constructor() {
    this.editorThemes = acode.require("editorThemes");
    this.themes = acode.require("themes");
    this.ThemeBuilder = acode.require("themeBuilder");
    this.DialogBox = acode.require("dialogBox");
  }

  buildEditorTheme() {
    const { cm, createTheme, createHighlightStyle } = this.editorThemes;
    const t = cm.tags;
    const styles = [];

    const add = (tag, style) => {
      const tags = Array.isArray(tag) ? tag.filter(Boolean) : tag;
      if (!tags || (Array.isArray(tags) && tags.length === 0)) return;
      styles.push({ tag: tags, fontWeight: "400", ...style });
    };

    const mod = (modifier, tag) =>
      typeof modifier === "function" && tag ? modifier(tag) : null;

    add(t.name, { color: COLORS.cream });
    add(t.variableName, { color: "#F2D4CE" });
    add(mod(t.definition, t.variableName), {
      color: "#F7C4C1",
    });
    add(mod(t.local, t.variableName), { color: "#EED4C7" });
    add(mod(t.constant, t.variableName), {
      color: COLORS.caramel,
    });
    add(mod(t.function, t.variableName), {
      color: "#EBAA93",
    });
    add(mod(t.standard, t.variableName), { color: "#E5C39E" });
    add(mod(t.special, t.variableName), {
      color: "#DF9A88",
    });

    add(t.namespace, { color: "#D0AC82" });
    add(t.typeName, { color: "#E0BD90" });
    add(t.className, { color: "#F0C9A6" });
    add(t.tagName, { color: "#E4B88D" });
    add(t.macroName, { color: "#D9A56F" });
    add(t.labelName, { color: "#DEB186" });

    add(t.propertyName, { color: "#DCA58B" });
    add(mod(t.definition, t.propertyName), {
      color: "#E8AC97",
    });
    add(mod(t.function, t.propertyName), {
      color: "#EFAE9C",
    });
    add(t.attributeName, { color: "#DBAA7D" });

    add(t.literal, { color: "#E5B889" });
    add(t.string, { color: "#EFC09D" });
    add(t.docString, { color: "#E5B090", fontStyle: "italic" });
    add(t.character, { color: "#F4C6A3" });
    add(t.attributeValue, { color: "#EDB993" });
    add(mod(t.special, t.string), { color: "#EC9F83" });

    add(t.number, { color: "#E0B06D" });
    add(t.integer, { color: "#DDA667" });
    add(t.float, { color: "#E5B575" });
    add(t.bool, { color: "#E3A174" });
    add(t.regexp, { color: "#E09B82" });
    add(t.escape, { color: "#F0A087" });
    add(t.color, { color: "#EAB286" });
    add(t.url, { color: "#E0B88A", textDecoration: "underline" });

    add(t.keyword, { color: COLORS.pink });
    add(t.self, { color: "#F5B2BE" });
    add(t.null, { color: "#DD8799" });
    add(t.atom, { color: "#E19E77" });
    add(t.unit, { color: "#DDB081" });
    add(t.modifier, { color: "#EC95AA" });
    add(t.operatorKeyword, { color: "#DF8D9D" });
    add(t.controlKeyword, { color: "#F09BAE" });
    add(t.definitionKeyword, { color: "#F5A9B9" });
    add(t.moduleKeyword, { color: "#E58FA3" });

    add(t.operator, { color: "#D1A08D" });
    add(t.derefOperator, { color: "#D8A28A" });
    add(t.arithmeticOperator, { color: "#D1A06F" });
    add(t.logicOperator, { color: "#DA9298" });
    add(t.bitwiseOperator, { color: "#CE986F" });
    add(t.compareOperator, { color: "#DB9B8D" });
    add(t.updateOperator, { color: "#D6A077" });
    add(t.definitionOperator, { color: "#E0A585" });
    add(t.typeOperator, { color: "#D4A475" });
    add(t.controlOperator, { color: "#DF8E98" });

    add(t.punctuation, { color: COLORS.punctuation });
    add(t.separator, { color: "#C3A39F" });
    add(t.bracket, { color: "#D0ADA6" });
    add(t.angleBracket, { color: "#D3AFA7" });
    add(t.squareBracket, { color: "#D6B2AA" });
    add(t.paren, { color: "#D2ACA4" });
    add(t.brace, { color: "#DAB5AA" });

    add(t.comment, { color: COLORS.muted, fontStyle: "italic" });
    add(t.lineComment, { color: "#A98E88", fontStyle: "italic" });
    add(t.blockComment, { color: "#AD9189", fontStyle: "italic" });
    add(t.docComment, {
      color: "#B49990",
      fontStyle: "italic",
    });

    add(t.content, { color: COLORS.text });
    add(t.heading, { color: "#F5B0C0" });
    add(t.heading1, { color: "#F7AFC0" });
    add(t.heading2, { color: "#F0A8B9" });
    add(t.heading3, { color: "#EAA3B3" });
    add(t.heading4, { color: "#E59FAC" });
    add(t.heading5, { color: "#DF9BA7" });
    add(t.heading6, { color: "#D997A1" });
    add(t.contentSeparator, { color: COLORS.tanDeep });
    add(t.list, { color: "#DDB181" });
    add(t.quote, { color: "#E0C1AA", fontStyle: "italic" });
    add(t.emphasis, { color: "#F0B0B8", fontStyle: "italic" });
    add(t.strong, { color: "#F5BEB5" });
    add(t.link, { color: "#E4B184", textDecoration: "underline" });
    add(t.monospace, { color: "#EBC3A0" });
    add(t.strikethrough, { color: "#C3A09C", textDecoration: "line-through" });

    add(t.inserted, { color: COLORS.inserted });
    add(t.deleted, { color: COLORS.deleted, textDecoration: "line-through" });
    add(t.changed, { color: "#E7AB87" });
    add(t.invalid, {
      color: COLORS.error,
      textDecoration: "underline wavy",
    });

    add(t.meta, { color: "#C9A590", fontStyle: "italic" });
    add(t.documentMeta, { color: "#C7A184", fontStyle: "italic" });
    add(t.annotation, { color: "#D9A686", fontStyle: "italic" });
    add(t.processingInstruction, { color: "#DFA282", fontStyle: "italic" });

    const highlight = createHighlightStyle(styles);

    return createTheme({
      dark: true,
      styles: {
        "&": {
          color: COLORS.text,
          backgroundColor: COLORS.editorBg,
        },
        ".cm-content": {
          caretColor: COLORS.pinkSoft,
          fontWeight: "400 !important",
          fontSynthesis: "style",
        },
        "& .cm-content .cm-line, & .cm-content .cm-line span": {
          fontWeight: "400 !important",
          fontSynthesis: "style",
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: COLORS.pinkSoft,
        },
        ".cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: "#C65F7B52",
        },
        "&.cm-focused .cm-selectionBackground": {
          backgroundColor: "#D06B865F",
        },
        ".cm-gutters": {
          backgroundColor: COLORS.gutterBg,
          color: "#A9918B",
          border: "none",
        },
        ".cm-activeLine": {
          backgroundColor: "#5B35402F",
        },
        ".cm-activeLineGutter": {
          backgroundColor: "#432C34",
          color: COLORS.pinkSoft,
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "#4B323A",
          border: "1px solid #70515B",
          color: COLORS.tanLight,
        },
        ".cm-tooltip": {
          backgroundColor: COLORS.panel,
          color: COLORS.text,
          border: "1px solid #6B4B56",
        },
        ".cm-tooltip-autocomplete > ul > li[aria-selected]": {
          backgroundColor: "#67404B",
          color: "#FFF4F6",
        },
        ".cm-panels": {
          backgroundColor: COLORS.gutterBg,
          color: COLORS.text,
        },
        ".cm-searchMatch": {
          backgroundColor: "#D8A0664D",
          outline: "1px solid #E0B378",
        },
        ".cm-searchMatch.cm-searchMatch-selected": {
          backgroundColor: "#E6B58466",
        },
        ".cm-matchingBracket": {
          backgroundColor: "#E0BA7A38",
          outline: "1px solid #E0BA7A",
        },
      },
      highlightStyle: highlight,
    });
  }

  registerEditorTheme() {
    try {
      this.editorThemes.unregister(EDITOR_THEME_ID);
    } catch (_) {
      //NOOP
    }

    this.editorThemes.register({
      id: EDITOR_THEME_ID,
      caption: "CherryBlossom",
      dark: true,
      getExtension: () => this.buildEditorTheme(),
      config: {
        name: EDITOR_THEME_ID,
        dark: true,
        background: COLORS.editorBg,
        foreground: COLORS.text,
        keyword: COLORS.pink,
        string: "#EFC09D",
        number: "#E0B06D",
        comment: COLORS.muted,
        function: "#EBAA93",
        variable: "#F2D4CE",
        namespace: "#D0AC82",
        type: "#E0BD90",
        class: "#F0C9A6",
        property: "#DCA58B",
        constant: COLORS.caramel,
        operator: "#D1A08D",
        invalid: COLORS.error,
      },
    });
  }

  createAppTheme() {
    const theme = new this.ThemeBuilder(APP_THEME_NAME, "dark");

    theme.autoDarkened = false;
    theme.preferredEditorTheme = EDITOR_THEME_ID;

    theme.primaryColor = COLORS.pink;
    theme.primaryTextColor = "#2B1A20";
    theme.darkenedPrimaryColor = COLORS.pinkDeep;

    theme.secondaryColor = COLORS.panel;
    theme.secondaryTextColor = COLORS.text;

    theme.backgroundColor = COLORS.appBg;
    theme.textColor = COLORS.text;

    theme.activeColor = "#5D3945";
    theme.activeTextColor = "#FFF5F6";
    theme.activeIconColor = COLORS.tanLight;

    theme.buttonBackgroundColor = COLORS.pink;
    theme.buttonTextColor = "#2B1A20";
    theme.buttonActiveColor = COLORS.pinkSoft;

    theme.borderColor = "#73515C";
    theme.boxShadowColor = "rgba(0, 0, 0, 0.30)";
    theme.scrollbarColor = "#986A76";
    theme.linkTextColor = COLORS.tanLight;
    theme.errorTextColor = COLORS.error;

    theme.popupBackgroundColor = COLORS.panel;
    theme.popupTextColor = COLORS.text;
    theme.popupIconColor = COLORS.pinkSoft;
    theme.popupActiveColor = COLORS.panelRaised;
    theme.popupBorderColor = "#75515C";
    theme.popupBorderRadius = "12px";

    return theme;
  }

  registerAppTheme() {
    const appTheme = this.createAppTheme();

    try {
      const existing = this.themes.get(APP_THEME_NAME);
      if (existing) {
        this.themes.update(appTheme);
        return;
      }
    } catch (_) {
      //NOOP
    }

    this.themes.add(appTheme);
  }

  showInstallThanks(firstInit) {
    if (!firstInit || typeof this.DialogBox !== "function") return;

    const html = `
      <div style="padding: 8px 4px; line-height: 1.55; color: inherit;">
        <div style="font-size: 42px; text-align: center; margin-bottom: 8px;">🌸</div>
        <div style="text-align: center; font-size: 16px; margin-bottom: 8px;">
          Thank you for installing CherryBlossom!
        </div>
        <div style="text-align: center; opacity: .9;">
          Your new sakura-pink, petal-cream, and warm-bark app + editor theme is ready to use.
          I hope it makes coding in Acode a little more beautiful.
        </div>
        <div style="text-align: center; margin-top: 12px; opacity: .72; font-size: 12px;">
          — ByteForge88
        </div>
      </div>
    `;

    try {
      this.DialogBox("CherryBlossom Installed", html, "Enjoy 🌸");
    } catch (_) {
      //NOOP
    }
  }

  async init(options = {}) {
    this.registerEditorTheme();
    this.registerAppTheme();
    this.showInstallThanks(options.firstInit === true);
  }

  async destroy() {
    try {
      this.editorThemes.unregister(EDITOR_THEME_ID);
    } catch (_) {
      //NOOP
    }

    if (typeof this.themes.remove === "function") {
      try {
        this.themes.remove(APP_THEME_NAME);
      } catch (_) {
        //NOOP
      }
    }
  }
}

if (window.acode) {
  const cherryBlossomTheme = new CherryBlossomThemePlugin();

  acode.setPluginInit(plugin.id, async (_baseUrl, _page, options) => {
    await cherryBlossomTheme.init(options);
  });

  acode.setPluginUnmount(plugin.id, async () => {
    await cherryBlossomTheme.destroy();
  });
}
