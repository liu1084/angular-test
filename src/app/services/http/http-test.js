/**
 * Created by neusoft on 2016/3/17.
 *
 */
ScrumModule.provider('httpTest', function () {
	var config = {
		params: function () {
			return {
				method: 'post', //HTTP请求方法
				url: '', //请求目标URL
				params: '', //URL的参数
				headers: {}, //额外的请求头
				timeout: 5000, //XHR请求的超时时间，默认5000毫秒
				cache: false, //XHR请求的缓存开关
				transform: { //在与后端交换数据前后，对数据进行处理的变换函数
					request: function () {
					},
					response: function () {
					}
				},
				callback: {
					success: function(data, status, headers, config){

					},
					error: function(data, status, headers, config){

					}
				}
			};
		}
	};
	return {
		setParams: function (params) {
			config.params.method = params.method;
			config.params.url = params.url;
			config.params.headers = params.headers;
			config.params.timeout = params.timeout;
			config.params.cache = params.cache;
			config.params.transform = params.transform;
		},
		setSuccess: function (successCallback) {
			config.params.callback.success = successCallback;
		},
		setError: function (errorCallback) {
			config.params.callback.error = errorCallback;
		},
		$get: function ($http) {
			var result = $http(config.params());
			result.success = config.params.callback.success;
			result.error = config.params.callback.error;
			return result;
		}
	};
});