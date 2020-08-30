(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{411:function(n,a,s){"use strict";s.r(a),a.default='<p>This Webpack loader inlines SVG as module. If you use Adobe suite or Sketch to export SVGs, you will get auto-generated, unneeded crusts. This loader removes it for you, too.</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> svg-inline-loader --save-dev</code></pre>\n<h2 id="configuration">Configuration<a href="#configuration" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Simply add configuration object to <code>module.loaders</code> like this.</p>\n<pre><code class="hljs language-javascript">    <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.svg$/</span><span class="token punctuation">,</span>\n        loader<span class="token operator">:</span> <span class="token string">\'svg-inline-loader\'</span>\n    <span class="token punctuation">}</span></code></pre>\n<p>warning: You should configure this loader only once via <code>module.loaders</code> or <code>require(\'!...\')</code>. See <a href="https://github.com/webpack-contrib/svg-inline-loader/issues/15">#15</a> for detail.</p>\n<h2 id="query-options">Query Options<a href="#query-options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="removetags-boolean"><code>removeTags: boolean</code><a href="#removetags-boolean" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Removes specified tags and its children. You can specify tags by setting <code>removingTags</code> query array.</p>\n<p>default: <code>removeTags: false</code></p>\n<h4 id="removingtags-string"><code>removingTags: [...string]</code><a href="#removingtags-string" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>warning: this won\'t work unless you specify <code>removeTags: true</code></p>\n<p>default: <code>removingTags: [\'title\', \'desc\', \'defs\', \'style\']</code></p>\n<h4 id="warntags-string"><code>warnTags: [...string]</code><a href="#warntags-string" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>warns about tags, ex: [\'desc\', \'defs\', \'style\']</p>\n<p>default: <code>warnTags: []</code></p>\n<h4 id="removesvgtagattrs-boolean"><code>removeSVGTagAttrs: boolean</code><a href="#removesvgtagattrs-boolean" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Removes <code>width</code> and <code>height</code> attributes from <code>&#x3C;svg /></code>.</p>\n<p>default: <code>removeSVGTagAttrs: true</code></p>\n<h4 id="removingtagattrs-string"><code>removingTagAttrs: [...string]</code><a href="#removingtagattrs-string" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Removes attributes from inside the <code>&#x3C;svg /></code>.</p>\n<p>default: <code>removingTagAttrs: []</code></p>\n<h4 id="warntagattrs-string"><code>warnTagAttrs: [...string]</code><a href="#warntagattrs-string" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Warns to console about attributes from inside the <code>&#x3C;svg /></code>.</p>\n<p>default: <code>warnTagAttrs: []</code></p>\n<h4 id="classprefix-boolean--string"><code>classPrefix: boolean || string</code><a href="#classprefix-boolean--string" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Adds a prefix to class names to avoid collision across svg files.</p>\n<p>default: <code>classPrefix: false</code></p>\n<h4 id="idprefix-boolean--string"><code>idPrefix: boolean || string</code><a href="#idprefix-boolean--string" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Adds a prefix to ids to avoid collision across svg files.</p>\n<p>default: <code>idPrefix: false</code></p>\n<h2 id="example-usage">Example Usage<a href="#example-usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-js"><span class="token comment">// Using default hashed prefix (__[hash:base64:7]__)</span>\n<span class="token keyword">var</span> logoTwo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'svg-inline-loader?classPrefix!./logo_two.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Using custom string</span>\n<span class="token keyword">var</span> logoOne <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'svg-inline-loader?classPrefix=my-prefix-!./logo_one.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Using custom string and hash</span>\n<span class="token keyword">var</span> logoThree <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'svg-inline-loader?classPrefix=__prefix-[sha512:hash:hex:5]__!./logo_three.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>See <a href="https://github.com/webpack/loader-utils#interpolatename">loader-utils</a> for hash options.</p>\n<p>Preferred usage is via a <code>module.loaders</code>:</p>\n<pre><code class="hljs language-js">    <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.svg$/</span><span class="token punctuation">,</span>\n        loader<span class="token operator">:</span> <span class="token string">\'svg-inline-loader?classPrefix\'</span>\n    <span class="token punctuation">}</span></code></pre>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">\n        </br>\n        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">\n        </br>\n        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">\n        </br>\n        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">\n        </br>\n        <a href="https://github.com/TheLarkInn">Sean Larkin</a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);