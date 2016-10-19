/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the IBM License, a copy of which may be obtained at:
 *
 * http://www14.software.ibm.com/cgi-bin/weblap/lap.pl?li_formnum=L-DDIN-AEGGZJ&popup=y&title=IBM%20IoT%20for%20Automotive%20Sample%20Starter%20Apps%20%28Android-Mobile%20and%20Server-all%29
 *
 * You may not use this file except in compliance with the license.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform{
	transform(array: Array<Object>, key: string, order: boolean){
		array = array || [];
		if(!key){
			return array;
		}
		return array.sort(function(a, b){
			return (order ? -1 : 1)*(<any>(a[key] > b[key]) - <any>(b[key] > a[key]));
		});
	}
}