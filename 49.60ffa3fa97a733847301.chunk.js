(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{343:function(n,a,s){"use strict";s.r(a),a.default='<p>These are the remaining configuration options supported by webpack.</p>\n<blockquote class="warning">\n<p>Help Wanted: This page is still a work in progress. If you are familiar with any of the options for which the description or examples are incomplete, please create an issue and submit a PR at the <a href="https://github.com/webpack/webpack.js.org">docs repo</a>!</p>\n</blockquote>\n<h2 id="amd"><code>amd</code><a href="#amd" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>object</code> <code>boolean: false</code></p>\n<p>Set the value of <code>require.amd</code> or <code>define.amd</code>. Setting <code>amd</code> to <code>false</code> will disable webpack\'s AMD support.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  amd<span class="token operator">:</span> <span class="token punctuation">{</span>\n    jQuery<span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Certain popular modules written for AMD, most notably jQuery versions 1.7.0 to 1.9.1, will only register as an AMD module if the loader indicates it has taken <a href="https://github.com/amdjs/amdjs-api/wiki/jQuery-and-AMD">special allowances</a> for multiple versions being included on a page.</p>\n<p>The allowances were the ability to restrict registrations to a specific version or to support different sandboxes with different defined modules.</p>\n<p>This option allows you to set the key your module looks for to a truthy value.\nAs it happens, the AMD support in webpack ignores the defined name anyways.</p>\n<h2 id="bail"><code>bail</code><a href="#bail" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean = false</code></p>\n<p>Fail out on the first error instead of tolerating it. By default webpack will log these errors in red in the terminal, as well as the browser console when using HMR, but continue bundling. To enable it:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  bail<span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>This will force webpack to exit its bundling process.</p>\n<h2 id="cache"><code>cache</code><a href="#cache" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean</code> <code>object</code></p>\n<p>Cache the generated webpack modules and chunks to improve build speed. <code>cache</code> is set to <code>type: \'memory\'</code> in <a href="/configuration/mode/#mode-development"><code>development</code> mode</a> and disabled in <a href="/configuration/mode/#mode-production"><code>production</code> mode</a>. <code>cache: true</code> is an alias to <code>cache: { type: \'memory\' }</code>. To disable caching pass <code>false</code>:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  cache<span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="cachetype"><code>cache.type</code><a href="#cachetype" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string: \'memory\' | \'filesystem\'</code></p>\n<p>Sets the <code>cache</code> type to either in memory or on the file system. The <code>memory</code> option is very straightforward, it tells webpack to store cache in memory and doesn\'t allow additional configuration:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  cache<span class="token operator">:</span> <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'memory\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>While setting <code>cache.type</code> to <code>filesystem</code> opens up more options for configuration.</p>\n<h3 id="cachecachedirectory"><code>cache.cacheDirectory</code><a href="#cachecachedirectory" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string</code></p>\n<p>Base directory for the cache. Defaults to <code>node_modules/.cache/webpack</code>.</p>\n<p><code>cache.cacheDirectory</code> option is only available when <a href="#cachetype"><code>cache.type</code></a> is set to <code>filesystem</code>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  cache<span class="token operator">:</span> <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'filesystem\'</span><span class="token punctuation">,</span>\n    cacheDirectory<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'.temp_cache\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>The final location of the cache is a combination of <code>cache.cacheDirectory</code> + <code>cache.name</code>.</p>\n</blockquote>\n<h3 id="cachecachelocation"><code>cache.cacheLocation</code><a href="#cachecachelocation" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string</code></p>\n<p>Locations for the cache. Defaults to <code>path.resolve(cache.cacheDirectory, cache.name)</code>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  cache<span class="token operator">:</span> <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'filesystem\'</span><span class="token punctuation">,</span>\n    cacheLocation<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'.test_cache\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="cachebuilddependencies"><code>cache.buildDependencies</code><a href="#cachebuilddependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>object</code></p>\n<p><code>cache.buildDependencies</code> is an object of arrays of additional code dependencies for the build. webpack will use a hash of each of these items and all dependencies to invalidate the filesystem cache.</p>\n<p>Defaults to <code>webpack/lib</code> to get all dependencies of webpack.</p>\n<blockquote class="tip">\n<p>It\'s recommended to set <code>cache.buildDependencies.config: [__filename]</code> in your webpack configuration to get the latest configuration and all dependencies.</p>\n</blockquote>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  cache<span class="token operator">:</span> <span class="token punctuation">{</span>\n    buildDependencies<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// This makes all dependencies of this file - build dependencies</span>\n      config<span class="token operator">:</span> <span class="token punctuation">[</span>__filename<span class="token punctuation">]</span>\n      <span class="token comment">// By default webpack and loaders are build dependencies</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="cachemanagedpaths"><code>cache.managedPaths</code><a href="#cachemanagedpaths" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string] = [\'./node_modules\']</code></p>\n<p><code>cache.managedPaths</code> is an array of package-manager only managed paths. webpack will avoid hashing and timestamping them, assume the version is unique and will use it as a snapshot (for both memory and filesystem cache).</p>\n<h3 id="cachehashalgorithm"><code>cache.hashAlgorithm</code><a href="#cachehashalgorithm" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string</code></p>\n<p>Algorithm used the hash generation. See <a href="https://nodejs.org/api/crypto.html">Node.js crypto</a> for more details. Defaults to <code>md4</code>.</p>\n<p><code>cache.hashAlgorithm</code> option is only available when <a href="#cachetype"><code>cache.type</code></a> is set to <code>filesystem</code>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  cache<span class="token operator">:</span> <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'filesystem\'</span><span class="token punctuation">,</span>\n    hashAlgorithm<span class="token operator">:</span> <span class="token string">\'md4\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="cachename"><code>cache.name</code><a href="#cachename" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string</code></p>\n<p>Name for the cache. Different names will lead to different coexisting caches. Defaults to <code>${config.name}-${config.mode}</code>. Using <code>cache.name</code> makes sense when you have multiple configurations which should have independent caches.</p>\n<p><code>cache.name</code> option is only available when <a href="#cachetype"><code>cache.type</code></a> is set to <code>filesystem</code>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  cache<span class="token operator">:</span> <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'filesystem\'</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">\'AppBuildCache\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="cachestore"><code>cache.store</code><a href="#cachestore" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string = \'pack\': \'pack\'</code></p>\n<p><code>cache.store</code> tells webpack when to store data on the file system.</p>\n<ul>\n<li><code>\'pack\'</code>: Store data when compiler is idle in a single file for all cached items</li>\n</ul>\n<p><code>cache.store</code> option is only available when <a href="#cachetype"><code>cache.type</code></a> is set to <code>filesystem</code>.</p>\n<blockquote class="warning">\n<p><code>pack</code> is the only supported mode since webpack 5.0.x</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  cache<span class="token operator">:</span> <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'filesystem\'</span><span class="token punctuation">,</span>\n    store<span class="token operator">:</span> <span class="token string">\'pack\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="cacheversion"><code>cache.version</code><a href="#cacheversion" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string = \'\'</code></p>\n<p>Version of the cache data. Different versions won\'t allow to reuse the cache and override existing content. Update the version when configuration changed in a way which doesn\'t allow to reuse cache. This will invalidate the cache.</p>\n<p><code>cache.version</code> option is only available when <a href="#cachetype"><code>cache.type</code></a> is set to <code>filesystem</code>.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  cache<span class="token operator">:</span> <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'filesystem\'</span><span class="token punctuation">,</span>\n    version<span class="token operator">:</span> <span class="token string">\'your_version\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>Don\'t share the cache between calls with different options.</p>\n</blockquote>\n<h3 id="cacheidletimeout"><code>cache.idleTimeout</code><a href="#cacheidletimeout" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>number = 10000</code></p>\n<p>Time in milliseconds. <code>cache.idleTimeout</code> denotes the time period after which the cache storing should happen.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//..</span>\n  cache<span class="token operator">:</span> <span class="token punctuation">{</span>\n    idleTimeout<span class="token operator">:</span> <span class="token number">10000</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p><code>cache.idleTimeout</code> is only available when <a href="#cachestore"><code>cache.store</code></a> is set to either <code>\'pack\'</code> or <code>\'idle\'</code></p>\n</blockquote>\n<h3 id="cacheidletimeoutforinitialstore"><code>cache.idleTimeoutForInitialStore</code><a href="#cacheidletimeoutforinitialstore" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>number = 0</code></p>\n<p>Time in milliseconds. <code>cache.idleTimeoutForInitialStore</code> is the time period after which the initial cache storing should happen.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//..</span>\n  cache<span class="token operator">:</span> <span class="token punctuation">{</span>\n    idleTimeoutForInitialStore<span class="token operator">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p><code>cache.idleTimeoutForInitialStore</code> is only available when <a href="#cachestore"><code>cache.store</code></a> is set to either <code>\'pack\'</code> or <code>\'idle\'</code></p>\n</blockquote>\n<h2 id="loader"><code>loader</code><a href="#loader" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>object</code></p>\n<p>Expose custom values into the loader context.</p>\n<blockquote class="todo">\n<p>Add an example...</p>\n</blockquote>\n<h2 id="parallelism"><code>parallelism</code><a href="#parallelism" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>number = 100</code></p>\n<p>Limit the number of parallel processed modules. Can be used to fine tune performance or to get more reliable profiling results.</p>\n<h2 id="profile"><code>profile</code><a href="#profile" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>boolean</code></p>\n<p>Capture a "profile" of the application, including statistics and hints, which can then be dissected using the <a href="https://webpack.github.io/analyse/">Analyze</a> tool.</p>\n<blockquote class="tip">\n<p>Use the <a href="https://www.npmjs.com/package/stats-webpack-plugin">StatsPlugin</a> for more control over the generated profile.</p>\n</blockquote>\n<blockquote class="tip">\n<p>Combine with <code>parallelism: 1</code> for better results.</p>\n</blockquote>\n<h2 id="recordspath"><code>recordsPath</code><a href="#recordspath" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string</code></p>\n<p>Use this option to generate a JSON file containing webpack "records" -- pieces of data used to store module identifiers across multiple builds. You can use this file to track how modules change between builds. To generate one, simply specify a location:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  recordsPath<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'records.json\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>Records are particularly useful if you have a complex setup that leverages <a href="/guides/code-splitting">Code Splitting</a>. The data can be used to ensure the split bundles are achieving the <a href="/guides/caching">caching</a> behavior you need.</p>\n<blockquote class="tip">\n<p>Note that although this file is generated by the compiler, you may still want to track it in source control to keep a history of how it has changed over time.</p>\n</blockquote>\n<blockquote class="warning">\n<p>Setting <code>recordsPath</code> will essentially set <code>recordsInputPath</code> and <code>recordsOutputPath</code> to the same location. This is usually all that\'s necessary unless you decide to change the name of the file containing the records. See below for an example.</p>\n</blockquote>\n<h2 id="recordsinputpath"><code>recordsInputPath</code><a href="#recordsinputpath" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string</code></p>\n<p>Specify the file from which to read the last set of records. This can be used to rename a records file. See the example below.</p>\n<h2 id="recordsoutputpath"><code>recordsOutputPath</code><a href="#recordsoutputpath" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string</code></p>\n<p>Specify where the records should be written. The following example shows how you might use this option in combination with <code>recordsInputPath</code> to rename a records file:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  recordsInputPath<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'records.json\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  recordsOutputPath<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'newRecords.json\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="name"><code>name</code><a href="#name" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string</code></p>\n<p>Name of the configuration. Used when loading multiple configurations.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  name<span class="token operator">:</span> <span class="token string">\'admin-app\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="infrastructurelogging">infrastructureLogging<a href="#infrastructurelogging" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Options for infrastructure level logging.</p>\n<p><code>object = {}</code></p>\n<h3 id="level">level<a href="#level" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string</code></p>\n<p>Enable infrastructure logging output. Similar to <a href="/configuration/stats/#statslogging"><code>stats.logging</code></a> option but for infrastructure. No default value is given.</p>\n<p>Possible values:</p>\n<ul>\n<li><code>\'none\'</code> - disable logging</li>\n<li><code>\'error\'</code> - errors only</li>\n<li><code>\'warn\'</code> - errors and warnings only</li>\n<li><code>\'info\'</code> - errors, warnings, and info messages</li>\n<li><code>\'log\'</code> - errors, warnings, info messages, log messages, groups, clears. Collapsed groups are displayed in a collapsed state.</li>\n<li><code>\'verbose\'</code> - log everything except debug and trace. Collapsed groups are displayed in expanded state.</li>\n</ul>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  infrastructureLogging<span class="token operator">:</span> <span class="token punctuation">{</span>\n    level<span class="token operator">:</span> <span class="token string">\'info\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="debug">debug<a href="#debug" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string</code> <code>RegExp</code> <code>function(name) => boolean</code> <code>[string, RegExp, function(name) => boolean]</code></p>\n<p>Enable debug information of specified loggers such as plugins or loaders. Similar to <a href="/configuration/stats/#statsloggingdebug"><code>stats.loggingDebug</code></a> option but for infrastructure. No default value is given.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  infrastructureLogging<span class="token operator">:</span> <span class="token punctuation">{</span>\n    level<span class="token operator">:</span> <span class="token string">\'info\'</span><span class="token punctuation">,</span>\n    debug<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span>\n      <span class="token regex">/MyPlugin/</span><span class="token punctuation">,</span>\n      <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> name<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n'}}]);