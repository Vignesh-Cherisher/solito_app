export class crossCommunicationService {
  selectedCityName: string = 'Chennai';

  getSelectedCity(): string {
    return this.selectedCityName
  }

  setSelectedCity(selectedCity:string) {
    this.selectedCityName = selectedCity
  }
}