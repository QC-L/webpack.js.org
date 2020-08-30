(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{442:function(n,s,a){"use strict";a.r(s),s.default='<p>The <code>EnvironmentPlugin</code> is shorthand for using the <a href="/plugins/define-plugin"><code>DefinePlugin</code></a> on <a href="https://nodejs.org/api/process.html#process_process_env"><code>process.env</code></a> keys.</p>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The <code>EnvironmentPlugin</code> accepts either an array of keys or an object mapping its keys to their default values.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>EnvironmentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'NODE_ENV\'</span><span class="token punctuation">,</span> <span class="token string">\'DEBUG\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>This is equivalent to the following <code>DefinePlugin</code> application:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token string">\'process.env.NODE_ENV\'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token string">\'process.env.DEBUG\'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEBUG</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>Not specifying the environment variable raises an "<code>EnvironmentPlugin</code> - <code>${key}</code> environment variable is undefined" error.</p>\n</blockquote>\n<h2 id="usage-with-default-values">Usage with default values<a href="#usage-with-default-values" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Alternatively, the <code>EnvironmentPlugin</code> supports an object, which maps keys to their default values. The default value for a key is taken if the key is undefined in <code>process.env</code>.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>EnvironmentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">\'development\'</span><span class="token punctuation">,</span> <span class="token comment">// use \'development\' unless process.env.NODE_ENV is defined</span>\n  <span class="token constant">DEBUG</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>Variables coming from <code>process.env</code> are always strings.</p>\n</blockquote>\n<blockquote class="tip">\n<p>Unlike <a href="/plugins/define-plugin"><code>DefinePlugin</code></a>, default values are applied to <code>JSON.stringify</code> by the <code>EnvironmentPlugin</code>.</p>\n</blockquote>\n<blockquote class="tip">\n<p>To specify an unset default value, use <code>null</code> instead of <code>undefined</code>.</p>\n</blockquote>\n<blockquote class="warning">\n<p>If an environment variable is not found during bundling and no default value was provided, webpack will throw an error instead of a warning.</p>\n</blockquote>\n<p><strong>Example:</strong></p>\n<p>Let\'s investigate the result when running the previous <code>EnvironmentPlugin</code> configuration on a test file <code>entry.js</code>:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Welcome to production\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEBUG</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Debugging output\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>When executing <code>NODE_ENV=production webpack</code> in the terminal to build, <code>entry.js</code> becomes this:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">\'production\'</span> <span class="token operator">===</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// &#x3C;-- \'production\' from NODE_ENV is taken</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Welcome to production\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// &#x3C;-- default value is taken</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Debugging output\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>Running <code>DEBUG=false webpack</code> yields:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">\'development\'</span> <span class="token operator">===</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// &#x3C;-- default value is taken</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Welcome to production\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">\'false\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// &#x3C;-- \'false\' from DEBUG is taken</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Debugging output\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="dotenvplugin"><code>DotenvPlugin</code><a href="#dotenvplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The third-party <a href="https://github.com/mrsteele/dotenv-webpack"><code>DotenvPlugin</code></a> (<code>dotenv-webpack</code>) allows you to expose (a subset of) <a href="https://www.npmjs.com/package/dotenv">dotenv variables</a>:</p>\n<pre><code class="hljs language-bash">// .env\n<span class="token assign-left variable">DB_HOST</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1\n<span class="token assign-left variable">DB_PASS</span><span class="token operator">=</span>foobar\n<span class="token assign-left variable">S3_API</span><span class="token operator">=</span>mysecretkey</code></pre>\n<pre><code class="hljs language-javascript"><span class="token keyword">new</span> <span class="token class-name">Dotenv</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">\'./.env\'</span><span class="token punctuation">,</span> <span class="token comment">// Path to .env file (this is the default)</span>\n  safe<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// load .env.example (defaults to "false" which does not use dotenv-safe)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n'}}]);