import { CurrentWeatherData } from '../models/current-weather-data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(protected http: HttpClient) {}

  public getCurrentWeatherData() {
    // stavite svoj APIKEY
    return this.http.get<CurrentWeatherData>('http://api.weatherapi.com/v1/current.json?key=0ea33c2862ae419f854202839211503&q=Zagreb',
    { observe: 'response', responseType: 'json' });
  }

  public getWeatherAndAirQuality() {
    return this.http.get<CurrentWeatherData>('http://api.weatherapi.com/v1/current.json?key=636ccc6465d14389b3981852211903&q=Zagreb&aqi=yes',
    { observe: 'response', responseType: 'json' });
  }

  public getDailyWeatherByCityName(city: string) {
    const url: string = 'http://api.weatherapi.com/v1/forecast.json?key='
      + environment.apiKey
      + '&q='
      + city
      + '&days=3&aqi=no&alerts=yes';

    return this.http.get(url);
  }

}
